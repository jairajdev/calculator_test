import { makeStyles } from "@material-ui/core/styles";

export const theme = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  mobileMapBackground: {
    maxHeight: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  desktopMapBackground: {
    width: 700,
    maxHeight: 500,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 200,
  },
  fabBackButton: {
    position: "absolute",
    margin: theme.spacing(2),
    right: 0,
    zIndex: 10,
    bottom: 0,
  },
  marker: {
    display: "inline-flex",
    position: "relative",
    transform: "translate(-50%, -20%)",
    left: 0,
    top: 5,
    bottom: 0,
  },
  markerInfo: {
    display: "inline-flex",
    transform: "translate(-50%, -20%)",
    position: "relative",
    left: 0,
    top: -130,
    bottom: 0,
  },
  table: {
    width: 650,
  },
}));
