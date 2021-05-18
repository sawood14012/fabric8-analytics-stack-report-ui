import { 
    Drawer,
    DrawerActions,
    DrawerCloseButton,
    DrawerContent,
    DrawerContentBody,
    DrawerHead,
    DrawerPanelContent,
    Progress,
    ProgressSize,
    ProgressMeasureLocation,
    ProgressVariant,
    Button,
    Text,
    TextVariants
} from "@patternfly/react-core";
import {
    Table,
    TableHeader,
    TableBody,
    TableText,
    TableVariant
} from "@patternfly/react-table";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";



const TextTable = (data: string)=> {
    return (<TableText wrapModifier="wrap">{data}</TableText>);
}

const ProgressBar = (data : number) => {
    const title = String(data).concat('%');
    return (<Progress value={data} title={title} size={ProgressSize.sm} measureLocation={ProgressMeasureLocation.none}/>
    )
}

const FeedbackButtons = () => {
    return (
        <div>
        <Button variant="link" icon={<FontAwesomeIcon icon={faThumbsUp} />} />
        <Button variant="link" icon={<FontAwesomeIcon icon={faThumbsDown} />} />
        </div>
      
    )


}

const DrawerFC = () => {
    const [drawerSta, setDrawerState] = useState(false);
    const columns = ['Companion Dependencies', 'Confidence Score', 'Feedback'];
    const rows = [
        [
            {title: (TextTable('org.apache.commons:commons-lang3')),},
            {title: (ProgressBar(85))},
            {title: (FeedbackButtons())}
        ],
        [
            {title: (TextTable('joda-time:joda-time'))},
            {title: (ProgressBar(63))},
            {title: (FeedbackButtons())}
        ],
        [
            {title: (TextTable('org.springframework.boot:spring-boot-starter-web'))},
            {title: (ProgressBar(60))},
            {title: (FeedbackButtons())}
        ]
    ]
    const panelc = (
      <DrawerPanelContent>
        <DrawerHead>
          <DrawerActions>
            <DrawerCloseButton onClick={() => setDrawerState(!drawerSta)} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );
      return (
        <Drawer isExpanded={drawerSta}>
          <DrawerContent panelContent={panelc}>
            <DrawerContentBody>
            <div>
                  <Table aria-label="Sortable Table" cells={columns} rows={rows} variant={TableVariant.compact}>
                    <TableHeader />
                    <TableBody onRowClick={(e, row) => setDrawerState(!drawerSta)} />
                  </Table>
                
              </div>
            </DrawerContentBody>
          </DrawerContent>
        </Drawer>
      );
}

export default DrawerFC;
