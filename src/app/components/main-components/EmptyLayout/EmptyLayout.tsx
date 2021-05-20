import React, { useEffect, useState, useContext } from "react"
import {
  Title,
  Button,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  PageSection,
  Page,
  Skeleton,
  Grid,
  GridItem,
  Card,
  CardBody,
} from "@patternfly/react-core"
import CubesIcon from "@patternfly/react-icons/dist/js/icons/cubes-icon"
import "./EmptyLayout.scss"

const PercentageWidths = () => (
  <Card className="GridCard">
    <CardBody>
      <Skeleton width="25%" screenreaderText="Loading contents" />
      <br />
      <Skeleton width="33%" />
      <br />
      <Skeleton width="50%" />
      <br />
      <Skeleton width="66%" />
      <br />
      <Skeleton width="75%" />
      <br />
      <Skeleton />
    </CardBody>
  </Card>
)
type BasicProps = {
  Header: JSX.Element
}

const Basic = ({ Header }: BasicProps) => (
  <Page header={Header}>
    <PageSection>
      <Grid hasGutter>
        <GridItem span={5}>{PercentageWidths}</GridItem>
        <GridItem span={7}>{PercentageWidths}</GridItem>
        <GridItem span={12}>
          <div style={{ height: "200px" }}>
            <Skeleton
              height="100%"
              screenreaderText="Loading large rectangle contents"
            />
          </div>
        </GridItem>
      </Grid>
    </PageSection>
  </Page>
)
type Loader = {
  loading: boolean
  Header: JSX.Element
}
const CRDALoader = ({ loading, Header }: Loader) => {
  if (loading) {
    return <Basic Header={Header} />
  }
  return (
    <EmptyState>
      <EmptyStateIcon icon={CubesIcon} />
      <Title headingLevel="h4" size="lg">
        Oops The Page you are Looking for Doesn’t Exists.
      </Title>
      <EmptyStateBody>
        This represents an the empty state. you can Try giving the proper Stack
        id.
      </EmptyStateBody>
      <Button variant="primary">Go Home</Button>
    </EmptyState>
  )
}

export default CRDALoader
