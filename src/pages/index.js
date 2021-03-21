import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-xl font-semibold">Exploring Data</h1>
    <div>
      <h2>Lectures</h2>
      <ul>
        <li>Lectures will be at 9:45 - 11:15am EST on Mondays & Wednesdays</li>
        <li>Assignments can be completed using either R or Python</li>
      </ul>
    </div>
    <div>
      <h2>Instructor</h2>
      <p>Zachary Luety</p>
      <ul>
        <li>Actuary at GPW & associates</li>
        <li>Co-chair, ASU Datascience Advisory Board</li>
        <li>Email: zluety@asu.edu</li>
      </ul>
    </div>
    <div>
      <h2>Teaching Assistancts</h2>
      <p>TBD1 (TBD1@asu.edu)</p>
      <p>TBD2 (TBD2@asu.edu)</p>
    </div>
    <div>
      <h2>Office Hours</h2>
      <p>Monday</p>
      <ul>
        <li>TBD</li>
      </ul>
      <p>Tuesday</p>
      <ul>
        <li>TBD</li>
      </ul>
      <p>Wednesday</p>
      <ul>
        <li>TBD</li>
      </ul>
      <p>Thursday</p>
      <ul>
        <li>TBD</li>
      </ul>
      <p>Friday</p>
      <ul>
        <li>TBD</li>
      </ul>
      <p>Saturday</p>
      <ul>
        <li>TBD</li>
      </ul>
    </div>
    <h2>Labs</h2>
    <ul>
      <li>TBD</li>
      <li>TBD</li>
    </ul>
    
    <p>All lectures and lab sessions will be recorded and available on the course Canvas site.</p>
    
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
