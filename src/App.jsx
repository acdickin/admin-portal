import { useState } from "react";
import { Box } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./scenes/global/Sidebar";
// import Team from './scenes/team'
// import Contacts from './scenes/contacts'
// import Invoices from './scenes/Invoices'
// import Bar from './scenes/bar'
// import Form from './scenes/form'
// import Line from './scenes/line'
// import Pie from './scenes/pie'
// import FAQ from './scenes/faq'
// import Geography from './scenes/geography'
// import Calendar from './scenes/calendar'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Box display="flex" flexFirection="row">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path='/team' element={<Team/>}/> */}
                {/* <Route path='/contacts' element={<Contacts/>}/> */}
                {/* <Route path='/invoices' element={<Invoices/>}/> */}
                {/* <Route path='/bar' element={<Bar/>}/> */}
                {/* <Route path='/form' element={<Form/>}/> */}
                {/* <Route path='/line' element={<Line/>}/> */}
                {/* <Route path='/pie' element={<Pie/>}/> */}
                {/* <Route path='/faq' element={<FAQ/>}/> */}
                {/* <Route path='/geography' element={<Geography/>}/> */}
                {/* <Route path='/calendar' element={<Calendar/>}/> */}
              </Routes>
            </main>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
