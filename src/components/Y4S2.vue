<template>
  <div id="app">
    <section class="todo-wrapper mr-3">
      <h1 class="todo-title">
        <b>Year 4 Semester 2</b>
      </h1>
      <b-field>
        <b-autocomplete
          rounded
          v-model="new_impt"
          :data="filteredDataArray"
          placeholder="e.g. IS216 Web Application Development II"
          clearable
          @select="option => (selected = option)"
          v-on:keyup.enter="addItem"
        >
          <template slot="empty">No results found</template>
        </b-autocomplete>
      </b-field>
      <!-- <input type="text" class="input-todo" v-bind:class="{ active: new_impt }"
          placeholder="Exam Dates"
          v-model="new_impt"
          v-on:keyup.enter="addItem"
        /> -->
      <div class="d-flex justify-content-left">
        <div
          class="btnn btnn-add"
          v-bind:class="{ active: new_impt }"
          @click="addItem"
        >
          <h5 class="btn-text">Add module</h5>
        </div>
      </div>

      <div v-if="pending1.length > 0">
        <p class="status busy">
          You have {{ pending1.length }} module<span v-if="pending1.length > 1"
            >s</span
          >
          this semester
        </p>
        <transition-group name="todo-item" tag="ul" class="todo-list">
          <li v-for="item1 in pending1" v-bind:key="item1.title">
            <label v-bind:for="'item_0' + item1.id"></label>
            <span class="todo-text">{{ item1.title }}</span>
            <span class="deleteT" @click="deleteItem(item1)"></span>
          </li>
        </transition-group>
      </div>

      <transition name="slide-fade">
        <p class="status free" v-if="!pending1.length">
          <img src="../../glassdoor/pusheen.gif" alt="celebration" />You got no
          modules this semester?
        </p>
      </transition>

      <div v-if="completed1.length > 0 && showComplete">
        <p class="status">Past Important Dates</p>
        <transition-group name="todo-item" tag="ul" class="todo-list archived">
          <li v-for="item1 in completed1" v-bind:key="item1.title">
            <input
              class="todo-checkbox"
              v-bind:id="'item_0' + item1.id"
              v-model="item1.done"
              type="checkbox"
            />
            <label v-bind:for="'item_0' + item1.id"></label>
            <span class="todo-text">{{ item1.title }}</span>
            <span class="delete" @click="deleteItem(item1)"></span>
          </li>
        </transition-group>
      </div>
    </section>
  </div>
</template>

<script>
require("@//assets/styles/modplanner.css");

export default {
  name: "Important",
  data() {
    return {
      imptList: [],
      new_impt: "",
      showComplete: false,
      newItem: "",
      selected: null,
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
        "CS422 Reasoning, Planning and Learning under Uncertainty",
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
        "COR-MGMT1302 Business, Government and Society",
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
        "GA002 Contemporary Asia: Power, Diversity & Change",
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
        "ACM102 Art & History II: The Modern, Postmodern and the Contemporary",
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
        "LAW469 Introduction to Chinese History, Culture, Economy, Politics and Law",
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
        "COR1703 Managing in a Volatile, Uncertain, Complex and Ambiguous Context(SMU-X)",
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
        "LAW466 Evidence, Litigation and the Criminal Process",
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
        "COR2202 Science, Environment and Empire",
        "COR2603 Singapore: Imagining The Next Fifty Years",
        "FTW100 Finishing Touch Workshops (Year One)",
        "HUMN017 A Cultural Introduction to India: From Indus Valley to Infosys"
      ]
    };
  },
  mounted() {
    this.getImpt();
  },
  watch: {
    imptList: {
      handler: function(updatedList1) {
        localStorage.setItem("y4s2_list", JSON.stringify(updatedList1));
      },
      deep: true
    }
  },
  computed: {
    filteredDataArray() {
      return this.mods.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.new_impt.toLowerCase()) >= 0
        );
      });
    },

    pending1: function() {
      return this.imptList.filter(function(item1) {
        return !item1.done;
      });
    },
    completed1: function() {
      return this.imptList.filter(function(item1) {
        return item1.done;
      });
    },
    completedPercentage: function() {
      return (
        Math.floor((this.completed1.length / this.imptList.length) * 100) + "%"
      );
    },
    today: function() {
      var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0!
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = {
        day: weekday[today.getDay()],
        date: dd + "/" + mm + "/" + yyyy
      };

      return today;
    }
  },
  methods: {
    // get all todos when loading the page
    getImpt() {
      if (localStorage.getItem("y4s2_list")) {
        this.imptList = JSON.parse(localStorage.getItem("y4s2_list"));
      }
    },
    // add a new item
    addItem() {
      // validation check
      if (this.new_impt) {
        this.imptList.unshift({
          id: this.imptList.length,
          title: this.new_impt,
          done: false
        });
      }
      // reset new_todo
      this.new_impt = "";
      // save the new item in localstorage
      return true;
    },
    deleteItem(item1) {
      this.imptList.splice(this.imptList.indexOf(item1), 1);
    },
    toggleShowComplete() {
      this.showComplete = !this.showComplete;
    },
    clearAll() {
      this.imptList = [];
    }
  }
};
</script>

<style scoped>
.control.has-icons-right .icon.is-right {
  margin-top: 16px;
}
</style>
