import React from 'react';
import { Card, CardTitle, CardBody, CardFooter, TextVariants, TextContent, Text } from '@patternfly/react-core';
import './Summary.scss'



class SummaryCard extends React.Component {
    render() {
        return (
            <Card className="--pf-c-card--BoxShadow summary-of-the-stack">
                <CardTitle className=""><TextContent><Text component={TextVariants.h2}>Summary of the stack </Text></TextContent></CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        );
    }
    
}

export default SummaryCard;