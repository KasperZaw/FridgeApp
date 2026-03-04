import { Html5Qrcode } from "html5-qrcode";
import { ScanLine } from "lucide-react";
import {
  useFridgeStore,
  type FridgeStorage,
} from "../../../backend/globalState/globalState";
import "../../../styles/App.scss";
import { useRef, useState } from "react";

const scanner = () => {
  const [scanning, setScanning] = useState(false);
  const html5QrcodeRef = useRef<Html5Qrcode | null>(null);
  const addProduct = useFridgeStore((state: FridgeStorage) => state.addProduct);

  const onScanSuccess = async (decodedText: string) => {
    stopScan();
    const response = await fetch(
      `https://world.openfoodfacts.net/api/v2/product/${decodedText}.json`,
    );
    const json = await response.json();
    addProduct({
      name: json.product.product_name,
      img: json.product.image_front_thumb_url,
      id: json.product.id,
      size: json.product.quantity,
      ean: decodedText,
      kcal: json.product.nutriments["energy-kcal"],
      protein: json.product.nutriments["proteins"],
      fat: json.product.nutriments["fat"],
    });
    console.log({
      name: json.product.product_name,
      size: json.product.quantity,
    });
    console.log("skanowany id:", json.product.id);
    console.log(
      "produkty w storze:",
      useFridgeStore.getState().product.map((p) => p.id),
    );
    console.log(
      "quantity produktu:",
      useFridgeStore.getState().product.find((p) => p.id === json.product.id)
        ?.quantity,
    );
  };
  const startScan = async () => {
    html5QrcodeRef.current = new Html5Qrcode("reader");
    await html5QrcodeRef.current.start(
      { facingMode: "environment" }, // tylna kamera
      { fps: 10, qrbox: { width: 250, height: 250 } },
      (decodedText: string) => onScanSuccess(decodedText),
      (error: string) => console.warn(error),
    );
    setScanning(true);
  };

  const stopScan = async () => {
    await html5QrcodeRef.current
      ?.stop()
      .then((ignore) => {
        console.log(ignore);
      })
      .catch((error) => {
        console.error(error);
      });
    setScanning(false);
  };

  return (
    <div>
      <div id="reader" />
      <div className="scanner">
        {!scanning ? (
          <button onClick={startScan}>
            Skanuj Produkt <ScanLine size={24} />
          </button>
        ) : (
          <button onClick={stopScan}>stop skanowania</button>
        )}
      </div>
    </div>
  );
};

export default scanner;
