import React from 'react';
import { Card, CardTitle, CardBody, CardFooter } from '@patternfly/react-core';



class Tableview extends React.Component {
    render() {
        return (
            <Card className="pf-global--BorderColor--100">
                <CardTitle>Header</CardTitle>
                <CardBody>Body</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        );
    }
    
}

export default Tableview