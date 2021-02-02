<template>
  <div
    id="signup"
    style=" height: 100%; overflow-y: scroll; overflow-x: hidden; width: 100%;"
  >
    <!-- header -->
    <div class="area" style="height:100%; width: 100%;overflow: visible">
      <ul class="circles" style="height:100%; width: 100%; overflow: visible">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="d-flex justify-content-between">
      <img
        src="../assets/images/smoolife.png"
        id="logo"
        style="margin-bottom: 0px; width: 10rem"
      />
      <div id="sign-in">
        <button
          type="button"
          class="btn btn-primary"
          @click="$router.push('/login')"
        >
          Sign in
        </button>
      </div>
    </div>

    <!-- <div class="row" id="header">
      <div class="col ">
        <img
          src="../assets/images/smoolife.png"
          id="logo"
          style="margin-bottom: 0px;"
        />
      </div>

      <div class="col" id="sign-in">
        <button
          type="button"
          class="btn btn-primary"
          @click="$router.push('/login')"
        >
          Sign in
        </button>
      </div>
    </div> -->

    <div class="row d-flex justify-content-center">
      <img
        src="../assets/images/corgi_study.gif"
        style="width: 10%; height: 10%;"
      />
    </div>

    <div class="row">
      <div class="col">
        <!-- registration details -->
        <div class="row">
          <div class="container" id="registration">
            <div class="row  d-flex justify-content-center">
              <h1>Create an account</h1>
            </div>

            <div class="row  d-flex justify-content-center">
              <input
                type="text"
                class="form-control reg-form"
                placeholder="Username"
                aria-label="Username"
                v-model="username"
                style="width: 56vw"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div class="row  d-flex justify-content-center">
              <input
                type="text"
                class="form-control reg-form"
                placeholder="Name"
                aria-label="Name"
                v-model="name"
                style="width: 56vw"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div class="row  d-flex justify-content-center">
              <input
                type="password"
                class="form-control reg-form"
                placeholder="Password"
                aria-label="Password"
                v-model="password"
                style="width: 56vw"
                aria-describedby="addon-wrapping"
              />
            </div>

            <div
              class="row d-flex justify-content-md-left justify-content-center"
              id="selectModHeader"
            >
              <h4>Select your modules:</h4>
            </div>

            <!-- add modules -->
            <div id="vueMagic">
              <div class="row d-flex justify-content-center">
                <section>
                  <b-field>
                    <b-autocomplete
                      rounded
                      v-model="newItem"
                      :data="filteredDataArray"
                      placeholder="e.g. IS216 Web Application Development II"
                      icon="magnify"
                      clearable
                      @select="option => (selected = option)"
                    >
                      <template slot="empty">No results found</template>
                    </b-autocomplete>
                  </b-field>
                </section>

                <button
                  type="button"
                  class="btn btn-outline-primary btn-circle btn-sm text-center"
                  v-on:click="addNewItem"
                >
                  +
                </button>
              </div>

              <!-- need to fix width of the area of the list -->
              <div class="row" style="width: 100%; margin-left: 10em">
                <ul
                  style="list-style-type: none; white-space: nowrap; max-width:auto;"
                >
                  <li v-for="(item, index) in items" :key="index" id="modStyle">
                    {{ item }}
                    <button
                      type="button"
                      class="btn btn-outline-dark  btn-circle btn-sm"
                      @click="deleteFromList(index)"
                      style="display: inline-block;"
                    >
                      -
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <!-- register button -->
            <div class="row d-flex justify-content-center" id="reg-button">
              <button
                type="button"
                class="btn btn-outline-primary text-center"
                href="#"
                @click="submit()"
              >
                Register!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import("@/assets/styles/login.css");

export default {
  name: "Signup",
  data() {
    return {
      items: [],
      mods: [
        "ACCT332 Accounting Thought and Governance",
        "COMM120 Intercultural Communication",
        "COMM121 Fundamentals of Media Engagement",
        "COR-COMM1304 Management Communication",
        "COR-MAND2404 Mandarin",
        "COR-PPPM2606 Sustainable Cities",
        "COR-SOCG2607 Contemporary South Asian Societies",
        "COR-STAT1202 Introductory Statistics",
        "COR-THAI2403 Thai",
        "COR1307 Accounting for Entrepreneurs(SMU-X)",
        "COR1703 Managing in a Volatile, Uncertain, Complex and Ambiguous Context",
        "COR2204 Science and Technology Studies: Where Science meets Society",
        "COR2406 French",
        "COR3001 Big Questions(Happiness and Suffering)",
        "COR3301 Ethics and Social Responsibility",
        "COR3304 Ethics and Corporate Responsibility",
        "CS422 Reasoning Planning and Learning under Uncertainty",
        "DSA212 Data Science with R",
        "ECON113 Economics of Globalisation",
        "ECON209 Labour Economics",
        "FNCE102 Financial Markets and Investments",
        "FNCE221 Investment Banking",
        "FTW200 Finishing Touch Workshops (Year Two)",
        "GA001 Exploring Asian Identities",
        "GA201 Popular Culture in Asia",
        "GA203 History of Southeast Asia",
        "IDIS100 Research Methods in Sociology and Political Science",
        "IS111 Introduction to Programming",
        "IS442 Object Oriented Programming",
        "LAW301 Legal Theory & Philosophy",
        "LAW4001 Shareholder Deals and Litigation",
        "LAW419 International and Comparative Criminal Justice",
        "MGMT102 Strategy",
        "MGMT104 Corporate Entrepreneurship and Innovation",
        "MGMT106 Introduction to Organisations",
        "MGMT223 Social Entrepreneurship",
        "MGMT233 Leadership Seminar with CEOs",
        "MGMT310 Leading New Ventures to Growth",
        "MGMT330 The Design of Business(SMU-X)",
        "MKTG101 Marketing",
        "MKTG103 Marketing Research",
        "MKTG227 Integrated Marketing Communications: A Brand Perspective",
        "OBHR101 Management of People at Work",
        "OPIM201 Operations Management",
        "OPIM326 Service and Operations Analytics",
        "POSC003 Introduction to Political and Policy Studies",
        "POSC219 Political Theory",
        "POSC222 Chinese Foreign Policy",
        "QF205 Computing Technology For Finance",
        "QF208 Linear Algebra and Numerical Methods",
        "STAT151 Introduction to Statistical Theory",
        "TRAD201 Shipping Business",
        "ACCT101 Financial Accounting",
        "ACCT403 Advanced Taxation",
        "COMM102 Foundations in Strategic Communication",
        "COR-IS1702 Computational Thinking",
        "COR-JPAN2401 Japanese",
        "COR-MGMT1302 Business Government and Society",
        "COR-POSC2604 Politics of South East Asia",
        "COR1301 Leadership and Team Building(SMU-X)",
        "COR1305 Spreadsheet Modeling and Analytics",
        "COR1701 Critical Thinking in the Real World",
        "COR3302 Ethics and Social Responsibility for Accounting",
        "CS420 Introduction to Artificial Intelligence",
        "CS443 Software and Systems Security",
        "ECON107 Introduction to Econometrics",
        "ECON203 International Economics B",
        "ECON216 Economics of Ageing",
        "ECON241 Strategic Thinking",
        "ECON315 Economic Dynamics",
        "FNCE101 Finance",
        "FNCE217 Wealth Management and Advisory",
        "FNCE314 Sustainable Finance",
        "FNCE315 Analytics in Finance And Real Estate",
        "GA002 Contemporary Asia: Power Diversity & Change",
        "IDIS001 Analytical Skills",
        "IS215 Digital Business - Technologies and Transformation",
        "IS434 Social Analytics and Applications(SMU-X)",
        "LAW401 Intellectual Property Law",
        "LAW402 Chinese Contract Law",
        "LAW406 International Commercial Arbitration",
        "LAW414 International Commercialisation of Intellectual Property Rights",
        "LAW447 International Construction Law",
        "LAW451 Pre-trial Practice in Civil Litigation",
        "MGMT004 Creative Thinking",
        "MGMT218 Entrepreneurship and Business Creation",
        "MGMT232 Business Consulting",
        "MGMT236 Managing Strategic Change",
        "MKTG220 Digital Marketing(SMU-X)",
        "MKTG314 Retail Strategy",
        "OBHR201 Human Capital Management",
        "OBHR228 The Psychology of Managerial Decision Making",
        "OPIM319 Operations Strategy: Principles and Practice",
        "OPIM321 Supply Chain Management",
        "POSC215 Democracy",
        "POSC324 Media and International Relations",
        "PPPM101 Public Sector Management",
        "PPPM204 Political Participation and Policy",
        "PSYC204 Psychology of Reasoning & Thinking",
        "QF102 Investment Statistics",
        "QF206 Quantitative Trading Strategies",
        "QF207 Structured Products Sales and Trading",
        "SMT112 Sustainable Digital Cities",
        "SMT201 Geographic Information Systems for Urban Planning",
        "STAT201 Probability Theory and Applications",
        "ACCT201 Corporate Reporting and Financial Analysis",
        "ACCT335 Advanced Financial Accounting",
        "ACCT336 Valuation",
        "ACCT337 Statistical Programming",
        "ACCT409 Auditing for the Public Sector",
        "ACCT410 Internal Audit(SMU-X)",
        "ACCT420 Forecasting and Forensic Analytics",
        "ACM102 Art & History II: The Modern Postmodern and the Contemporary",
        "ACM301 Cultural Policy and Practice",
        "ANLY104 Analytics Foundation",
        "COMM246 Crisis Management and Communication",
        "COMM302 Designing Communication for Behavioural Change",
        "COMM346 Communication Strategies in the Digital Age",
        "COR-STAT1202 Introductory Statistics(SMU-X)",
        "COR1306 Capital Markets in China",
        "COR2201 Technology and World Change",
        "COR2203 Climate Change: Global and Local Solutions",
        "COR2407 Italian",
        "CS204 Interconnection of Cyber Physical Systems",
        "CS421 Introduction to Machine Learning",
        "CS440 Foundations of Cybersecurity",
        "CS442 Data Security and Privacy",
        "CS462 Internet of Things: Technology and Applications(SMU-X)",
        "ECON101 Intermediate Microeconomics",
        "ECON118 Economic Development in Asia(SMU-X)",
        "ECON118 Economic Development in Asia",
        "ECON205 Intermediate Mathematics for Economics",
        "ECON206 Game Theory",
        "ECON207 Intermediate Econometrics",
        "ECON208 Industrial Organisation",
        "ECON212 Real Estate Economics",
        "ECON236 Advanced Microeconomics",
        "FNCE201 Corporate Finance",
        "FNCE204 Analysis of Fixed-Income Securities",
        "FNCE218 Wealth Management and the Law",
        "FNCE232 Project Financing",
        "FNCE307 Advanced Portfolio Management",
        "FNCE310 Trade Finance",
        "IS211 Interaction Design and Prototyping",
        "IS216 Web Application Development II",
        "IS419 Retail Banking and Mobile Technology",
        "IS424 Data Mining and Business Analytics",
        "IS428 Visual Analytics for Business Intelligence(SMU-X)",
        "IS444 Digital Banking Enterprise Architecture",
        "IS445 Corporate Banking Technology and Blockchain",
        "LAW4002 Legal Analytics and Artificial Intelligence in Law(SMU-X)",
        "LAW405 Information Technology and the Law",
        "LAW469 Introduction to Chinese History Culture Economy Politics and Law",
        "LAW486 Privacy and Data Protection Law",
        "LAW491 Law and Digital Commerce(SMU-X)",
        "LAW499 Legal Commentaries for Practice (Advanced Legal Writing)(SMU-X)",
        "LGST101 Business Law",
        "LGST201 Company Law",
        "MGMT108 Introduction to Business Analytics",
        "MGMT222 Family Business",
        "MKTG204 Services Marketing",
        "MKTG219 Retail Management",
        "MKTG313 Pricing",
        "OBHR202 Performance Management & Compensation",
        "OBHR203 Personnel Selection",
        "OBHR215 Organisational Change & Design",
        "OPIM313 Project Management",
        "POSC220 International Relations of East Asia",
        "PSYC110 Psychology Research Methods I",
        "SOCG001 Understanding Societies",
        "SOCG110 Deconstructing Singapore Society",
        "SOCG215 Introduction to Sociological Theory",
        "SSCS400 Capstone Seminar",
        "ACCT102 Management Accounting",
        "ACCT112 Management Accounting",
        "ACCT223 Taxation",
        "ACCT224 Financial Reporting and Analysis",
        "ACCT334 Intermediate Financial Accounting",
        "ACCT424 Auditing Information Systems(SMU-X)",
        "ACM003 Introduction to Arts and Cultural Management",
        "COR-SOCG2609 Global and Transnational Sociology",
        "COR2100 Economics and Society",
        "ECON102 Intermediate Macroeconomics",
        "FNCE231 Real Estate Investments and Finance",
        "HIST005 European Cultural History",
        "IS210 Business Process Analysis & Solutioning",
        "LAW417 Law of Mergers and Acquisitions",
        "LAW445 Principles of the Law of Restitution",
        "LAW482 Deal-making and Dispute Resolution: Negotiation in an Age of Disruption",
        "MGMT205 International Business",
        "MGMT318 Design Thinking and Innovation(SMU-X)",
        "MGMT322 International Corporate Governance and Strategy",
        "MKTG102 Consumer Behaviour",
        "MKTG205 Advertising",
        "OBHR222 Negotiation and Conflict Management",
        "OBHR225 Technology Solutions for Human Resources",
        "OBHR299 Special Topics in Organisational Behaviour",
        "OPIM101 Decision Analysis",
        "OPIM311 Service Processes",
        "OPIM318 Sustainable Operations",
        "OPIM341 Procurement and Strategic Sourcing",
        "PSYC001 Introduction to Psychology",
        "PSYC209 Psychology of Close Relationships",
        "QF101 Quantitative Finance",
        "QF305 Global Financial Risk Management",
        "STAT203 Financial Mathematics",
        "ACCT331 Audit and Assurance",
        "COR1703 Managing in a Volatile Uncertain Complex and Ambiguous Context(SMU-X)",
        "COR3303 Ethics and Social Responsibility for Law",
        "CS301 IT Solution Architecture",
        "ECON235 International Macroeconomics",
        "LAW103 Criminal Law",
        "LAW201 Law of Business Organisations",
        "LAW202 Law of Property",
        "LAW205 Corporate Law",
        "LAW307 Law of Evidence",
        "LAW4003 International and Comparative Secured Transactions Law",
        "MGMT227 Managing Creativity in Organizations",
        "MGMT331 Management of Multinationals Across Asia(SMU-X)",
        "OPIM314 Logistics and Transportation Management",
        "STAT311 Risk Theory and Loss Models",
        "ACCT221 Accounting Information Systems",
        "ACCT418 Data Modelling and Visualisation",
        "COR-KREA2402 Korean",
        "COR-SOCG2608 Understanding China's Economic Miracle: Social Origins and Social Impact",
        "COR1307 Accounting for Entrepreneurs",
        "COR2408 Spanish",
        "ECON145 Introductory Data Analytics in Healthcare",
        "ECON155 Healthcare Management",
        "ECON234 International Trade",
        "FNCE213 Entrepreneurial Finance",
        "IS425 Managing Information Systems for Business Value(SMU-X)",
        "IS446 Managing Customer Relations with Analytics: Asian Insights",
        "LAW101 Contract Law 1",
        "LAW106 Legal Research and Writing I",
        "LAW108 The Singapore Legal System",
        "LAW466 Evidence Litigation and the Criminal Process",
        "LAW476 Medical Law and Health Policy",
        "LAW489 Introduction to Law and Technology",
        "MGMT304 Entrepreneurial Leadership in Ethnic Chinese Business",
        "MKTG217 Strategic Brand Management",
        "MKTG225 Customer Relationship Management",
        "OBHR204 Training & Development",
        "POSC320 Elections and Media",
        "PSYC108 Social Psychology",
        "PSYC112 Health Psychology",
        "ACCT111 Financial Accounting",
        "LAW203 Comparative Legal Systems",
        "POSC101 Introduction to Public Policy",
        "PSYC208 Psychology Research Methods II",
        "FNAR001 Dance: East and West",
        "IS412 Enterprise Business Solutions(SMU-X)",
        "LAW302 Commercial Conflict of Laws",
        "SMT202 Analytics Applications for Smart Living",
        "OPIM324 Global Supply Chains",
        "PSYC202 Cultural Psychology",
        "OBHR232 Legal Environment and Employment Relations",
        "PHIL207 Introduction to Classical Chinese Philosophy",
        "ACCT414 Accounting Analytics Capstone(SMU-X)",
        "ACCT416 Advanced Audit & Assurance",
        "POSC322 Mass Media and Public Opinion Research",
        "ACCT423 Audit Analytics(SMU-X)",
        "COR2202 Science Environment and Empire",
        "COR2603 Singapore: Imagining The Next Fifty Years",
        "FTW100 Finishing Touch Workshops (Year One)",
        "HUMN017 A Cultural Introduction to India: From Indus Valley to Infosys"
      ],
      newItem: "",
      selected: null,
      details: [],
      username: "",
      name: "",
      password: "",
      modulesSelected: []
    };
  },
  methods: {
    deleteFromList(index) {
      this.items.splice(index, 1);
    },
    addNewItem() {
      if (this.newItem != "") {
        this.items.push(this.newItem);
        this.newItem = "";
      } else {
        alert("Please provide at least 1 module.");
      }
    },
    submit() {
      if (
        this.username.length > 0 &&
        this.password.length > 0 &&
        this.name.length > 0 &&
        this.items.length > 0
      ) {
        this.details = {
          Username: this.username,
          Name: this.name,
          Password: this.password,
          Modules: this.items
        };
        let data = JSON.stringify(this.details);
        window.localStorage.setItem(this.username, data);
        this.modulesSelected.push(this.items);
        window.localStorage.setItem("modules", this.modulesSelected);
        console.log(window.localStorage.getItem("modules"));
        window.location.href = "/#/login";
      } else {
        if (this.username.length < 1) {
          alert("Please provide a username.");
        }
        if (this.password.length < 1) {
          alert("Please provide a password.");
        }
        if (this.name.length < 1) {
          alert("Please provide your name.");
        }
        if (this.items.length < 1) {
          alert("Please provide at least 1 module.");
        }
        for (var i in this.items) {
          if (this.items[i] === "") {
            alert("Please provide at least 1 module.");
          }
        }
      }
    }
  },
  computed: {
    filteredDataArray() {
      return this.mods.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.newItem.toLowerCase()) >= 0
        );
      });
    }
  }
};
// import("@/assets/styles/login.css");
require("@/assets/styles/login.css");
// @import "assets/styles/login.css"
</script>

<style>
#header {
  /* margin-top: 20px; */
  /* padding: 0; */
}
#logo {
  max-width: 50%;
  max-height: 50%;
  margin-left: 20px;
  margin-top: 20px !important;
}

#sign-in {
  margin-top: 20px;
  margin-right: 20px;
  text-align: right;
  position: relative;
  z-index: 999;
}

#blank-space {
  height: 40px;
}

#dropdown {
  margin-top: 3%;
}
.reg-form {
  width: 75%;
  font-size: large;
  margin-top: 3%;
}

.dropdown-toggle {
  margin-top: 3%;
}

#dDSchool {
  margin-left: 1%;
}

#selectModHeader {
  margin-top: 3%;
}

.btn-circle.btn-sm {
  width: 30px;
  height: 30px;
  padding: 0px 0px;
  border-radius: 15px;
  font-size: large;
  text-align: center;
  margin-left: 1%;
  margin-top: 0.5%;
}

#addModule {
  margin-top: 3%;
}

.input-bar-item {
  display: table-cell;
}

#modAdd {
  width: 70%;
}

#courseText {
  width: 50%;
}

#signup {
  /* animation: bgcolor infinite 14s; */
}

/* @keyframes bgcolor {
  0% {
    background: #ffdcce;
  }
  20% {
    background: #dcee9d;
  }
  60% {
    background: #ffe8ff;
  }
  80% {
    background: #cdcdf8;
  }
  100% {
    background: #dcf1c8;
  }
} */

.btn-primary,
.btn-secondary {
  background-color: #6987c9;
  border: #6987c9;
}

#registration {
  margin-bottom: 100px;
}

.autocomplete {
  width: 54vw;
  margin-bottom: 20px;
}

#modStyle {
  margin-left: auto;
  /* margin-right: auto; */
}
</style>
