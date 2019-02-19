import React from 'react'
import Register from '../students/Register'

const Home = props => {
  return(
    <React.Fragment>
      <section className="container">
        <div className="row">
          <div className="col s12 l4">
            <img src="img/js.png" alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h3 className="indigo-text text-darken-4">Javascript</h3>
            <p>Is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7">
            <img src="img/node.png" alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 pull-l4">
            <h3 className="indigo-text text-darken-4">NodeJs</h3>
            <p>Is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4">
            <img src="img/react.png" alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 offset-l1">
            <h3 className="indigo-text text-darken-4">React</h3>
            <p>Is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 l4 push-l7">
            <img src="img/redux.png" alt="" className="responsive-img materialboxed"/>
          </div>
          <div className="col s12 l6 pull-l4">
            <h3 className="indigo-text text-darken-4">Redux</h3>
            <p>Is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.</p>
          </div>
        </div>
      </section>
      <div className="parallax-container">
        <div className="parallax">
          <img src="img/parallax.png" alt=""/>
        </div>
      </div>
      <section className="container section scrollspy" id="register">
        <div className="row">
          <div className="col s12 l5">
            <h4 className="indigo-text text-darken-4">Register now with only (200 JOD) </h4>
            <p>Make your first step towards new software development trends; and be sure you will have a bright future in the job market. </p>
            <p>In this 20 hours course we will put you in the right direction among nowadays software development chaos.</p>
            <p>Initially register your information and preferences, we will contanct you for the upcoming courses soon. </p>
          </div>
          <div className="col s12 l5 offset-l2">
            <Register />
          </div>
        </div>
      </section>
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col s12 l6">
              <h5>About Me</h5>
              <p> I am a software specialist with more than twenty years experience in building complex applications in verious business areas.</p>
            </div>
            <div className="col s12 l4 offset-l2">
              <h5>Connect</h5>
              <ul>
                <li><a href="#" className="grey-text text-lighten-3">Facebook</a></li>
                <li><a href="#" className="grey-text text-lighten-3">Twitter</a></li>
                <li><a href="#" className="grey-text text-lighten-3">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center-align">&copy; 2019</div>
        </div>
      </footer>
    </React.Fragment>
  )
}
export default Home