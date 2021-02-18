import React from 'react';
import { Card, CardTitle, CardBody, CardFooter, TextVariants, TextContent, Text } from '@patternfly/react-core';
import './overview.scss'


class OverviewCard extends React.Component {
    render() {
        return (
            <Card className="pf-global--BorderColor--100">
                <CardTitle><TextContent><Text component={TextVariants.h3}>Overview of the Stack</Text></TextContent></CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        );
    }
    
}

export default OverviewCard