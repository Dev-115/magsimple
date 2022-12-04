import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../component/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MAG PROFILE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className={styles.welcomMat}>


        <h1 className={styles.title}>
          Welcome to MAGG
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>          We Design. We build. We Consult</code>
        </p>

        <div className={styles.welcomMatButtons}>
          <button>Button</button>
          <button>Button</button>
        </div>

      </div>
      <img
        src="/placeholder1.png"
        alt=""
        width={2500} height={2500}
        style={{
          objectFit: 'cover',
          overflow: 'hidden',
          zIndex: -1,
          backgroundPosition: 'center',
          position: 'sticky',
          height: '100vh',
          width: '100%',
        }}
      />

      <div className={styles.teamDetails}>
        <p href="" className={styles.card1}>
          <i className="bi bi-envelope"></i>
          <h2>Email</h2>
          <p>Our friendly team is here to help.</p>
          <bold>hi@untitled.com</bold>
        </p>

        <p href="" className={styles.card1}>
          <i className="bi bi-geo-alt"></i>
          <h2>Office</h2>
          <p>Come say hello at our office HQ.</p>
          <bold>100 smith street collingwood VIC 3066AU</bold>

        </p>

        <p href=""
          className={styles.card1}
        >

          <i className="bi bi-telephone"></i>
          <h2>Phone</h2>
          <p>Monday to Friday from 8am to 5pm.</p>
          <bold>+1(555) 000-0000</bold>
        </p>
      </div>
      <div className={styles.aboutUs}>

        <div className={styles.aboutUstext}><h2>ABOUT US</h2></div>
        <div className={styles.textcolor}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

      </div>

      <div className={styles.mediumSection}>

        <p href="" className={styles.midcard1}>
          <i className="bi bi-box-fill"></i>
          <h2 className={styles.textcolor}>Medium lenght section heading goes here</h2>
          <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.</code>
        </p>

        <p href="" className={styles.midcard1}>
          <i className="bi bi-box-fill"></i>
          <h2 className={styles.textcolor}>Medium lenght section heading goes here</h2>
          <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.</code>
        </p>

        <p href="" className={styles.midcard1}>
          <i className="bi bi-box-fill"></i>
          <h2 className={styles.textcolor}>Medium lenght section heading goes here</h2>
          <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.</code>
        </p>

      </div>

      <div className={styles.mediumSectionsingle}>
        <img
          src="/placeholder1.png"
          alt=""
          width={2500} height={2500}
          style={{
            objectFit: 'cover',
            overflow: 'hidden',
            zIndex: -2,
            backgroundPosition: 'center',
            position: 'sticky',
            height: '30vh',
            width: '100%',
          }}
        />
        <div className={styles.mediumSectionsingletext}>
          <h2 className={styles.textcolor}>Medium lenght heading goes here</h2>
          <code className={styles.textcolor}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</code>
        </div>

        <div className={styles.mediumSectionsinglerow1}>
          <button className={styles.textcolor}>Button[darker]</button>
          <button className={styles.textcolor}>Button</button>
        </div>


      </div>

      <div className={styles.mediumSectionFeature}>
        <div className={styles.mediumSectionFeaturetext}>
          <h2 className={styles.textcolor}>FEATURE WORKS</h2>
          <code className={styles.textcolor} >Lorem ipsum dolor sit amet, consectetur adipiscing elit,</code>
        </div>
        <div className={styles.mediumSectionFeaturerow1}>
          <img src="/OIP.png" alt="placehold Logo" />
          <img src="/OIP.png" alt="placehold Logo" />
          <img src="/OIP.png" alt="placehold Logo" />
          <img src="/OIP.png" alt="placehold Logo" />
          <img src="/OIP.png" alt="placehold Logo" />
          <img src="/OIP.png" alt="placehold Logo" />


        </div>
      </div>

      <div className={styles.mediumSectionPricing}>
        <div className={styles.mediumSectionPricingrow1}>
          <h2 className={styles.textcolor}>Pricing Plan</h2>
          <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</code>
        </div>
        <div className={styles.mediumSectionPricingrow2}>
          <a href="" className={styles.card}>
            <h2 className={styles.textcolor}>Basic Plan</h2>
            <h1 className={styles.textcolor}>$ 19/mo</h1>
            <code>or $199 yearly</code>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <button className={styles.textcolor}>Get Started</button>
          </a>

          <a href="" className={styles.card}>
            <h2 className={styles.textcolor}>Business Plan</h2>
            <h1 className={styles.textcolor}>$ 29/mo</h1>
            <code>or $299 yearly</code>

            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <button className={styles.textcolor}>Get Started</button>
          </a>

          <a href="" className={styles.card}>
            <h2 className={styles.textcolor}>Enterprise Plan</h2>
            <h1 className={styles.textcolor}>$ 49/mo</h1>
            <code>or $499 yearly</code>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <ul>
              &#10004; Feature text goes here
            </ul>
            <button className={styles.textcolor}>Get Started</button>

          </a>

        </div>

      </div>

      <div className={styles.mediumSectionsingle2nd}>
        <div className={styles.mediumSectionsingle2ndtext}>
          <h2>Medium lenght heading goes here</h2>
          <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</code>
        </div>
        <img
          src="/placeholder1.png"
          alt=""
          width={2500} height={2500}
          style={{
            objectFit: 'cover',
            overflow: 'hidden',
            zIndex: -1,
            backgroundPosition: 'center',
            position: 'sticky',
            height: '20vh',
            width: '100%',
          }}
        />
      </div>


      <div className={styles.meetTeam}>
        <div className={styles.meetTeamHeader}>
          <h2>Meett our team</h2>
          <p>Our philosophy is simple -- hire a team of diverse, passionate people and foster
            a culture that empowers you to do you best work.
          </p>
        </div>

        <div className={styles.meetTeamrow1}>
          <img className={styles.teamImage} src="/OIP.png" alt="placehold Logo" />
          <img className={styles.teamImage} src="/OIP.png" alt="placehold Logo" />
          <img className={styles.teamImage} src="/OIP.png" alt="placehold Logo" />

        </div>
        <div className={styles.meetTeamrow2}>
          <img className={styles.teamImage} src="/OIP.png" alt="placehold Logo" />
          <img className={styles.teamImage} src="/OIP.png" alt="placehold Logo" />
          <img className={styles.teamImage} src="/OIP.png" alt="placehold Logo" />

        </div>



      </div>

      <div className={styles.Contactus}>
        <code>Tagline</code>
        <h2>Contact us</h2>
        <code>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</code>

        <div className={styles.girdContactus}>

          <div className={styles.contactFormrightform}>
            <label>Name</label>
            <input className={styles.inputBoxstyle} />

            <label>Email</label>
            <input className={styles.inputBoxstyle} />

            <label>Message</label>
            <textarea className={styles.inputBoxstyle} ></textarea>

          </div>

          <div className={styles.contactFormleftform}>
            <a href="" className={styles.card1}>
              <i className="bi bi-envelope"></i>
              <h2>Email</h2>
              <p>Our friendly team is here to help.</p>
              <bold>hi@untitled.com</bold>
            </a>

            <a href="" className={styles.card1}>
              <i className="bi bi-geo-alt"></i>
              <h2>Office</h2>
              <p>Come say hello at our office HQ.</p>
              <bold>100 smith street collingwood VIC 3066AU</bold>

            </a>

            <a href="" className={styles.card1}>
              <i className="bi bi-telephone"></i>
              <h2>Phone</h2>
              <p>Monday to Friday from 8am to 5pm.</p>
              <bold>+1(555) 000-0000</bold>
            </a>
          </div>

        </div>

      </div>




      <footer className={styles.footer}>
        2022 Magg. All rights reserved.

        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookie Settings</p>

      </footer>
    </div >
  )
}
