import React from 'react'
import Navbarpage from '../Homepage/Navbarpage/Navbarpage'
import Footer from '..//Homepage/Footer/Footer'
import { Link } from 'react-router-dom'
import './CommitementAccess.css'

const CommitmenttoAccessibility = () => {
  return (
    <>
   
      <div className="div-Commitemnet-to-Accessiblity-in-Footer">
        <div className="div-of-div-comomites-a">
            <h3>GemsNY’s Commitment to Accessibility</h3>
            <span>GemsNY is committed to making our website content easy, accessible and user friendly for all. We believe this is an ongoing process and are constantly improving our website and user interface with the mission to accommodate all. To assist in our mission, if you are having difficulty viewing or navigating any content on our website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please call customer service at  <Link to="/">888-436-7692</Link> GemsNY Customer Service Contact No. - Click To Call or email our team at <Link to='/' >  adacompliance@gemsny.comEmail </Link> with “Disabled Access” in the subject line and provide a description of the specific feature(s) you feel are not fully accessible or a suggestion for improvement. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user friendly.</span>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default CommitmenttoAccessibility
