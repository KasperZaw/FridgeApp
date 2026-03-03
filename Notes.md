interface FridgeStorage {
user: UserData | null;
product: Product[];
// interface - opisujemy kształt funkcji
// void - funkcja tylko przypisuje stan, nic nie zwraca
// podobnie jak void w C/C++
setUser: (user: UserData | null) => void;
addProduct: (product: Product) => void;
removeProdcut: (id: string) => void;
}

const addUserInfo = create<FridgeStorage>((set) => ({
user: null,
product: [],

    setUser: (user: UserData | null) => set({ user }),
    addProduct: (product: Product) => set((state) => ({
        //set zawsze zwraca obiekt
        // dziala jak pop itp ale zapisujemy to w ten sposob
        // bierzemy za pomoca ... wszystkie produkty z tablicy a poprzecinku dopisujemy na koncu nowy
        // wazne nie mutujemy tutaj tablicy czyli nie modyfikujemy istniejace a tworzymy nowa zmodyfikowana tablice
        product: [...state.product, product]
    })),
    removeProdcut: (id: string) => set((state) => ({
        // usun produkt ktory ma konkretnie to id
        product: state.product.filter(p => p.id !== id)
    })),

}))

// TYPOGRAPHY
<Typography
variant="h1" // h1-h6, body1, body2, subtitle1, subtitle2, caption, overline
color="primary" // primary, secondary, error, warning, text.primary, text.secondary
align="center" // left, center, right, justify
fontWeight="bold"
fontSize={16}
noWrap // nie zawija tekstu

>

// BOX / STACK
<Box
sx={{ p: 2, m: 1 }} // padding, margin (1 = 8px)
display="flex"
flexDirection="column"
alignItems="center"
justifyContent="space-between"
width="100%"
height={200}
bgcolor="background.paper"

>

<Stack
direction="row" // row, column
spacing={2}
alignItems="center"
justifyContent="space-between"
flexWrap="wrap"

>

// BUTTON
<Button
variant="contained" // contained, outlined, text
color="primary" // primary, secondary, error, warning, success
size="small" // small, medium, large
fullWidth
disabled
startIcon={<Icon />}
endIcon={<Icon />}
onClick={() => {}}

>

// TEXTFIELD
<TextField
label="Nazwa"
variant="outlined" // outlined, filled, standard
size="small" // small, medium
fullWidth
disabled
error
helperText="Błąd"
placeholder="Wpisz..."
type="password"
multiline
rows={4}
value={value}
onChange={(e) => setValue(e.target.value)}

>

// CARD
<Card
elevation={3} // cień 0-24
variant="outlined"
sx={{ borderRadius: 2 }}

> // LAYOUT
> import Box from '@mui/material/Box'
> import Stack from '@mui/material/Stack'
> import Grid from '@mui/material/Grid'
> import Container from '@mui/material/Container'
> import Paper from '@mui/material/Paper'

// TEKST
import Typography from '@mui/material/Typography'

// PRZYCISKI
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab' // floating action button

// INPUTY
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Slider from '@mui/material/Slider'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'

// KARTY
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardHeader from '@mui/material/CardHeader'

// LISTY
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Divider from '@mui/material/Divider'

// NAWIGACJA
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Drawer from '@mui/material/Drawer'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import BottomNavigation from '@mui/material/BottomNavigation'

// FEEDBACK
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import CircularProgress from '@mui/material/CircularProgress'
import LinearProgress from '@mui/material/LinearProgress'
import Skeleton from '@mui/material/Skeleton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

// DANE
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'

// INNE
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Modal from '@mui/material/Modal'
import Popover from '@mui/material/Popover'
import Menu from '@mui/material/Menu'
import Pagination from '@mui/material/Pagination'
import Rating from '@mui/material/Rating'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
