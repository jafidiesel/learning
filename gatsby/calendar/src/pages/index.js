import React from "react"

import Calendar from '../components/calendar';

import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>

    <h1>Calendarios utn</h1>
    <h3>Proyecto final</h3>
    <Calendar src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=5b1butdmps219ps5hn49gc2k74%40group.calendar.google.com&amp;color=%235229A3&amp;ctz=America%2FArgentina%2FBuenos_Aires" />


  </Layout>
)

export default IndexPage
