import * as React from "react";
import Header from "./Header";
import { makeStyles } from "@fluentui/react-components";
import SongSelect from "./SongSelect";

interface AppProps {
  title: string;
}

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
  },
});

const App = (props: AppProps) => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Header logo="assets/logo-filled.png" title={props.title} message="Welcome" />
      <SongSelect></SongSelect>
    </div>
  );
};

export default App;
