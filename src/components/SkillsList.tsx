import { Box, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { useState } from "react";
import { skillsListData } from "../portfolioData";
import { BodyTitle } from "./BodyTitle";
import { SkillItem } from "./SkillItem";

enum TabTypes {
  frontend = "frontend",
  backend = "backend",
  tools = "tools",
}

type TabPanelProps = {
  children?: React.ReactNode;
  value: TabTypes;
  index: TabTypes;
};

// to display tab content, takes in current tab and index
const TabPanel: React.FunctionComponent<TabPanelProps> = ({
  value,
  children,
  index,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
    >
      {value === index && (
        <Box pt={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export const SkillsList: React.FunctionComponent = () => {
  const [currentTab, setCurrentTab] = useState<TabTypes>(TabTypes.frontend);
  return (
    <Box id="skills">
      <BodyTitle title="Skills" />
      <Paper square>
        <Tabs
          value={currentTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, value) => setCurrentTab(value)}
          aria-label="disabled tabs example"
        >
          <Tab label="Front End" value={TabTypes.frontend} />
          <Tab label="Back End" value={TabTypes.backend} />
          <Tab label="Tools" value={TabTypes.tools} />
        </Tabs>
      </Paper>
      <TabPanel value={currentTab} index={TabTypes.frontend}>
        {skillsListData.frontend.map((skills, idx) => (
          <SkillItem key={idx} {...skills} />
        ))}
      </TabPanel>
      <TabPanel value={currentTab} index={TabTypes.backend}>
        {skillsListData.backend.map((skills, idx) => (
          <SkillItem key={idx} {...skills} />
        ))}
      </TabPanel>
      <TabPanel value={currentTab} index={TabTypes.tools}>
        {skillsListData.tools.map((skills, idx) => (
          <SkillItem key={idx} {...skills} />
        ))}
      </TabPanel>
    </Box>
  );
};
