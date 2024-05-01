import React from 'react'
import styled from 'styled-components'
import Section from "./Section"
const Home = () => {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
   
      <Section
        title="Model Y"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Est. Lease Price Before Gas Savings"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Model X"
        description="After Federal Tax Credit & Est. Gas Savings"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Lowest Cost  Solar Panels in America"
        description="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section 
        title="Solar for New Roofs"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels "
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section 
        title="Accessories"
        description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels "
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height:100vh
`