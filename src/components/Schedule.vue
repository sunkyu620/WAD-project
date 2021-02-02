<template>
  <div>
    <div class="container-lecture">
      <section class="section-nav">
        <ul class="list-lecture">
          <li class="card-lecture" v-for="module in modules" :key="module.id">
            <a class="lecture-title" href="#"
              >{{ module[Object.keys(module)][1] }} ({{
                module[Object.keys(module)][0]
              }})
            </a>
            <h6 class="lecture-time">
              <i class="material-icons ic-lecture-info">access_time</i>
              <span
                >{{ module[Object.keys(module)][4] }} | ({{
                  module[Object.keys(module)][5]
                }})</span
              >
            </h6>
            <ul class="list-lecture-info">
              <li>Course Code : {{ Object.keys(module)[0] }}</li>
              <li>Professor : {{ module[Object.keys(module)][2] }}</li>
              <li>Location : {{ module[Object.keys(module)][3] }}</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="section-list">
        <div class="container">
          <div class="table-schedule">
            <div class="timeline">
              <ul>
                <li><span>08:00</span></li>
                <li><span>08:30</span></li>
                <li><span>09:00</span></li>
                <li><span>09:30</span></li>
                <li><span>10:00</span></li>
                <li><span>10:30</span></li>
                <li><span>11:00</span></li>
                <li><span>11:30</span></li>
                <li><span>12:00</span></li>
                <li><span>12:30</span></li>
                <li><span>13:00</span></li>
                <li><span>13:30</span></li>
                <li><span>14:00</span></li>
                <li><span>14:30</span></li>
                <li><span>15:00</span></li>
                <li><span>15:30</span></li>
                <li><span>16:00</span></li>
                <li><span>16:30</span></li>
                <li><span>17:00</span></li>
                <li><span>17:30</span></li>
                <li><span>18:00</span></li>
                <li><span>18:30</span></li>
                <li><span>19:00</span></li>
              </ul>
            </div>

            <div class="table-schedule-subject">
              <ul class="list-lecture-item">
                <li class="timeline-vertical">
                  <div class="top-info today">
                    <h2 class="day">Mon</h2>
                  </div>
                  <ul></ul>
                </li>

                <li class="timeline-vertical">
                  <div class="top-info">
                    <h2 class="day">Tue</h2>
                  </div>
                  <ul>
                    <li
                      class="lecture-time two-hr hr-13"
                      data-event="lecture-02"
                    >
                      <a href="#">
                        <div class="lecture-info">
                          <h6 class="lecture-title ">
                            Mangement Communication
                          </h6>
                          <h6 class="lecture-location">LKCSOB SR-3-3</h6>
                        </div>
                        <div
                          class="lecture-noti"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="과제 설명 텍스트 과제 설명 텍스트 과제 설명 텍스트"
                        >
                          <i class="material-icons ic-lecture-noti"
                            >assignment</i
                          >
                          <span class="lecture-noti-title">lorem ipsum</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="timeline-vertical">
                  <div class="top-info">
                    <h2 class="day">Wed</h2>
                  </div>

                  <ul></ul>
                </li>

                <li class="timeline-vertical">
                  <div class="top-info">
                    <h2 class="day">Thu</h2>
                  </div>

                  <ul></ul>
                </li>

                <li class="timeline-vertical">
                  <div class="top-info">
                    <h2 class="day">Fri</h2>
                  </div>

                  <ul></ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    const modules = [
      {
        COMM101: [
          "G1",
          "Management Communication",
          "Lindy Ong",
          "LKCSOB SR-3-3",
          "1200 - 15:15",
          "Tue"
        ]
      },
      {
        IS210: [
          "G3",
          "Biz Process Analysis & Solutioning",
          "Rafael J. Barros",
          "SIS SR-2-4",
          "0815 - 1130",
          "Wed"
        ]
      },
      {
        IS211: [
          "G7",
          "Interaction Design Prototyping",
          "Benjamin Gan",
          "SIS SR-2-3",
          "1200 - 1515",
          "Wed"
        ]
      },
      {
        OHBR002: [
          "G12",
          "Ethics and Corporate Responsibility",
          "Amy Seow",
          "LKCSOB SR-2-4",
          "0815 - 1130",
          "Thu"
        ]
      },
      {
        IS216: [
          "G2",
          "Web Application Development 2",
          "Kyong Jin Shim",
          "SIS-B1-1",
          "0815 - 1130",
          "Fri"
        ]
      }
    ];
    return {
      modules
    };
  }
};
</script>

<style scoped>
a {
  color: #7880b5;
}

a:hover {
  text-decoration: none;
  color: #007bff;
}

ol,
ul {
  padding: 0;
  list-style: none;
}

.container-lecture {
  font-size: 0;
  position: relative;
}

.container-lecture .section-nav,
.container-lecture .section-list {
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  display: inline-block;
  vertical-align: top;
  padding: 0 1.5rem 1.5rem 1.5rem;
}
@media (max-width: 767px) {
  .container-lecture .section-nav,
  .container-lecture .section-list {
    font-size: 15px;
  }
}
@media (max-width: 767px) {
  .container-lecture .section-nav,
  .container-lecture .section-list {
    padding: 1.5rem 1rem;
  }
}
.container-lecture .section-nav {
  width: 30rem;
  max-height: 90vh;
  overflow-y: scroll;
  border-right: 0.0625rem solid #d7e2eb;
}
.container-lecture .section-nav .form-control {
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  padding: 0.3125rem 0.75rem 0.3125rem 2.5rem;
  border: 0.0625rem solid #d7e2eb;
}
@media (max-width: 767px) {
  .container-lecture .section-nav .form-control {
    font-size: 15px;
  }
}
.container-lecture .section-nav .form-control::placeholder {
  color: #98a8b9;
}
.container-lecture .section-nav .ic-search {
  position: absolute;
  transform: translateY(-50%);
  top: 2.625rem;
  left: 2rem;
  color: #98a8b9;
}
@media (max-width: 1199px) {
  .container-lecture .section-nav .ic-search {
    position: inherit;
    left: 1rem;
    margin-left: 0.5rem;
    transform: translateY(-135%);
  }
}
.container-lecture .section-nav .list-lecture {
  padding-left: 0;
}
.container-lecture .section-nav .list-lecture .card-lecture {
  margin-top: 1rem;
  padding: 1rem;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.5rem;
}
.container-lecture .section-nav .list-lecture .card-lecture .lecture-title {
  font-size: 20px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  font-weight: 600;
}
@media (max-width: 767px) {
  .container-lecture .section-nav .list-lecture .card-lecture .lecture-title {
    font-size: 18px;
  }
}
.container-lecture .section-nav .list-lecture .card-lecture:hover {
  background-color: #eeebff;
  border: 0.0625rem solid #0078ff;
  cursor: pointer;
}
.container-lecture
  .section-nav
  .list-lecture
  .card-lecture:hover
  .list-lecture-info {
  color: #0078ff;
}
.container-lecture .section-nav .list-lecture .lecture-time {
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  color: #263747;
}
@media (max-width: 767px) {
  .container-lecture .section-nav .list-lecture .lecture-time {
    font-size: 15px;
  }
}
.container-lecture .section-nav .list-lecture .lecture-time .ic-lecture-info {
  margin-right: 0.25rem;
  margin-top: 0.05rem;
  font-size: 1rem;
  font-weight: 700;
}
.container-lecture .section-nav .list-lecture .lecture-time span {
  padding-top: 0.0625rem;
}
.container-lecture .section-nav .list-lecture .list-lecture-info {
  font-size: 14px;
  line-height: 1.5;
  color: #98a8b9;
}
@media (max-width: 767px) {
  .container-lecture .section-nav .list-lecture .list-lecture-info {
    font-size: 13px;
  }
}
@media (max-width: 1199px) {
  .container-lecture .section-nav .list-lecture {
    display: flex;
    margin-bottom: 0;
  }
  .container-lecture .section-nav .list-lecture .card-lecture {
    margin-top: 0;
    margin-right: 0.5rem;
    min-width: 25rem;
    width: 100%;
  }
}
@media (max-width: 1199px) {
  .container-lecture .section-nav {
    display: block;
    width: 100%;
    border-bottom: 0.0625rem solid #d7e2eb;
    max-height: 17.5rem;
  }
}
@media (min-width: 1200px) {
  .container-lecture .section-nav {
    position: sticky;
    top: 0;
  }
}
.container-lecture .section-list {
  overflow-y: scroll;
  width: calc(100% - 30rem);
}
@media (min-width: 768px) {
  .container-lecture .section-list {
    max-height: 90vh;
  }
}
@media (max-width: 1199px) {
  .container-lecture .section-list {
    display: block;
    padding-top: 0;
    width: 100%;
  }
}

.header-timetable-info {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 90%;
  max-width: 1400px;
  margin: 2rem auto;
}
.header-timetable-info h3 {
  margin-bottom: 0;
  margin-left: 3rem;
  font-weight: 700;
}
.header-timetable-info .btn-group .btn-light {
  margin: 0 0.0625rem;
  color: #263747;
  background-color: #e9ecf3;
  border-color: #e9ecf3;
  font-weight: 500;
  border-radius: 0.375rem;
}
.header-timetable-info .btn-group .btn-light:hover {
  color: #263747;
  background-color: #d7e2eb;
  border-color: #d7e2eb;
}
.header-timetable-info
  .btn-group
  .btn-light:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
.header-timetable-info .btn-group .btn-previous,
.header-timetable-info .btn-group .btn-next {
  padding: 0 0.25rem;
}
.header-timetable-info .btn-group .btn-today {
  padding: 0 1.25rem;
}
.header-timetable-info .btn-group .ic-previous,
.header-timetable-info .btn-group .ic-next {
  vertical-align: bottom;
}
@media (max-width: 991px) {
  .header-timetable-info {
    width: 90%;
  }
  .header-timetable-info h3 {
    margin-left: 0;
  }
}

.table-schedule {
  position: relative;
  margin: 2rem 0;
}
.table-schedule .timeline {
  display: none;
}
@media (min-width: 992px) {
  .table-schedule {
    width: 90%;
    max-width: 87.5rem;
    margin: 2rem auto;
  }
  .table-schedule:after {
    clear: both;
    content: "";
    display: block;
  }
  .table-schedule .timeline {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 3.5rem;
  }
  .table-schedule .timeline ul {
    padding-top: 0.75rem;
  }
  .table-schedule .timeline ul li {
    position: relative;
    height: 3.5rem;
  }
  .table-schedule .timeline ul li:after {
    content: "";
    position: absolute;
    top: 0;
    left: 3rem;
    width: 96.5%;
    height: 1px;
    background: #d7e2eb;
  }
  .table-schedule .timeline ul li:last-child:after {
    border: none;
  }
}

@media (min-width: 992px) {
  .table-schedule .timeline li span {
    font-size: 12px;
    line-height: 1.5;
    margin-left: -2rem;
    display: inline-block;
    transform: translateY(-70%);
    color: #98a8b9;
  }
  .table-schedule .timeline li:after {
    left: 3.75rem;
  }
  .table-schedule .timeline li:nth-of-type(2n) span {
    display: none;
  }
}
.table-schedule .table-schedule-subject .timeline-vertical {
  margin-bottom: 2rem;
}
.table-schedule .table-schedule-subject .timeline-vertical ul {
  display: flex;
  position: relative;
  padding: 0 1rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
@media (max-width: 1199px) {
  .table-schedule .table-schedule-subject .timeline-vertical ul {
    padding: 0;
  }
}
.table-schedule .table-schedule-subject .top-info {
  padding: 1rem 0;
  text-align: center;
  border-top: 0.0625rem solid #d7e2eb;
  color: #98a8b9;
}
.table-schedule .table-schedule-subject .top-info h6 {
  margin-bottom: 0;
}
.table-schedule .table-schedule-subject .today {
  color: #0078ff;
}
.table-schedule .table-schedule-subject .today .date {
  margin: 0 auto;
  background-color: #0078ff;
  border-radius: 50%;
  width: 2rem;
  color: white;
}
.table-schedule .table-schedule-subject .lecture-time {
  flex-shrink: 0;
  float: left;
  margin-right: 0.5rem;
  transition: opacity 0.2s, background 0.2s;
  height: 7rem;
  width: 50%;
}
.table-schedule .table-schedule-subject .lecture-time:before {
  content: "";
  position: absolute;
  width: 0.1875rem;
  height: 100%;
  top: 0;
  left: 0;
}
.table-schedule .table-schedule-subject .lecture-time:last-of-type {
  margin-right: 1rem;
}
.table-schedule .table-schedule-subject .lecture-time a {
  display: block;
  height: 100%;
  padding: 1rem;
}
.table-schedule .table-schedule-subject .lecture-time .lecture-title {
  display: block;
  margin-bottom: 0;
  font-weight: 700;
}
.table-schedule .table-schedule-subject .lecture-time .lecture-location {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0;
  font-weight: 500;
}
@media (max-width: 767px) {
  .table-schedule .table-schedule-subject .lecture-time .lecture-location {
    font-size: 13px;
  }
}
.table-schedule .table-schedule-subject .lecture-time .lecture-info {
  margin-bottom: 0.5rem;
}
.table-schedule .table-schedule-subject .lecture-time .lecture-noti {
  z-index: 500;
}
.table-schedule .table-schedule-subject .lecture-time .ic-lecture-noti {
  vertical-align: middle;
  margin-right: 0.125rem;
  font-size: 1rem;
}
.table-schedule .table-schedule-subject .lecture-time .lecture-noti-title {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 0;
}
@media (max-width: 767px) {
  .table-schedule .table-schedule-subject .lecture-time .lecture-noti-title {
    font-size: 13px;
  }
}
@media (max-width: 991px) {
  .table-schedule .table-schedule-subject .lecture-time {
    height: auto;
  }
  .table-schedule .table-schedule-subject .lecture-time:before {
    content: none;
  }
}
@media (min-width: 992px) {
  .table-schedule .table-schedule-subject {
    float: left;
    width: 100%;
  }
  .table-schedule .table-schedule-subject .timeline-vertical {
    float: left;
    margin-bottom: 0;
    width: 20%;
    border-top: 0;
  }
  .table-schedule .table-schedule-subject .timeline-vertical:last-child {
    border-right-width: 0;
  }
  .table-schedule
    .table-schedule-subject
    .timeline-vertical:not(:first-of-type) {
    border-left-width: 0;
  }
}
@media (min-width: 992px) {
  .table-schedule .table-schedule-subject {
    width: calc(100% - 3rem);
    margin-left: 3rem;
  }
  .table-schedule .table-schedule-subject .timeline-vertical ul {
    height: 80rem;
    display: block;
    overflow: visible;
    padding: 0;
    border-right: 0.0625rem solid #d7e2eb;
    border-bottom: 0.0625rem solid #d7e2eb;
  }
  .table-schedule .table-schedule-subject .timeline-vertical ul:after {
    display: none;
  }
  .table-schedule .table-schedule-subject .timeline-vertical:first-child ul {
    border-left: 0;
  }
  .table-schedule .table-schedule-subject .timeline-vertical:last-child ul {
    border-right: 0;
  }
  .table-schedule .table-schedule-subject .lecture-time {
    position: absolute;
    z-index: 3;
    width: calc(100% + 1px);
    left: -0.0625rem;
    flex-shrink: 1;
    max-width: none;
    margin-right: 0;
  }
  .table-schedule .table-schedule-subject .lecture-time a {
    padding: 0.5rem 0.75rem;
    overflow: scroll;
  }
  .table-schedule .table-schedule-subject .lecture-time a .lecture-noti {
    display: flex;
    align-items: center;
  }
  .table-schedule .table-schedule-subject .lecture-time:last-of-type {
    margin-right: 0;
  }
  .table-schedule .table-schedule-subject .lecture-time .selected-event {
    visibility: hidden;
  }
  .table-schedule .table-schedule-subject .two-hr {
    height: 14rem;
  }
  .table-schedule .table-schedule-subject .hr-9 {
    top: 0;
  }
  .table-schedule .table-schedule-subject .hr-10 {
    top: 7rem;
  }
  .table-schedule .table-schedule-subject .hr-11 {
    top: 14rem;
  }
  .table-schedule .table-schedule-subject .hr-12 {
    top: 21rem;
  }
  .table-schedule .table-schedule-subject .hr-13 {
    top: 28rem;
  }
  .table-schedule .table-schedule-subject .hr-14 {
    top: 35rem;
  }
  .table-schedule .table-schedule-subject .hr-15 {
    top: 42rem;
  }
  .table-schedule .table-schedule-subject .hr-16 {
    top: 49rem;
  }
  .table-schedule .table-schedule-subject .hr-17 {
    top: 56rem;
  }
  .table-schedule .table-schedule-subject .hr-18 {
    top: 57.375rem;
  }
}

.table-schedule .lecture-time[data-event="lecture-01"] {
  background-color: #e0f2f1;
}
.table-schedule .lecture-time[data-event="lecture-01"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-01"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-01"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-01"] .lecture-noti-title {
  color: #009688;
}
.table-schedule .lecture-time[data-event="lecture-01"]:hover {
  background-color: #b2dfdb;
}
.table-schedule .lecture-time[data-event="lecture-01"]:before {
  background-color: #009688;
}

.table-schedule .lecture-time[data-event="lecture-02"] {
  background: #efebe9;
}
.table-schedule .lecture-time[data-event="lecture-02"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-02"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-02"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-02"] .lecture-noti-title {
  color: #795548;
}
.table-schedule .lecture-time[data-event="lecture-02"]:hover {
  background-color: #d7ccc8;
}
.table-schedule .lecture-time[data-event="lecture-02"]:before {
  background-color: #795548;
}

.table-schedule .lecture-time[data-event="lecture-03"] {
  background: #e1f5fe;
}
.table-schedule .lecture-time[data-event="lecture-03"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-03"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-03"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-03"] .lecture-noti-title {
  color: #03a9f4;
}
.table-schedule .lecture-time[data-event="lecture-03"]:hover {
  background-color: #b3e5fc;
}
.table-schedule .lecture-time[data-event="lecture-03"]:before {
  background-color: #03a9f4;
}

.table-schedule .lecture-time[data-event="lecture-04"] {
  background: #ede7f6;
}
.table-schedule .lecture-time[data-event="lecture-04"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-04"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-04"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-04"] .lecture-noti-title {
  color: #673ab7;
}
.table-schedule .lecture-time[data-event="lecture-04"]:hover {
  background-color: #d1c4e9;
}
.table-schedule .lecture-time[data-event="lecture-04"]:before {
  background-color: #673ab7;
}

.table-schedule .lecture-time[data-event="lecture-05"] {
  background: #fce4ec;
}
.table-schedule .lecture-time[data-event="lecture-05"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-05"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-05"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-05"] .lecture-noti-title {
  color: #e91e63;
}
.table-schedule .lecture-time[data-event="lecture-05"]:hover {
  background-color: #f8bbd0;
}
.table-schedule .lecture-time[data-event="lecture-05"]:before {
  background-color: #e91e63;
}

.table-schedule .lecture-time[data-event="lecture-06"] {
  background: #e8f5e9;
}
.table-schedule .lecture-time[data-event="lecture-06"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-06"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-06"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-06"] .lecture-noti-title {
  color: #4caf50;
}
.table-schedule .lecture-time[data-event="lecture-06"]:hover {
  background-color: #c8e6c9;
}
.table-schedule .lecture-time[data-event="lecture-06"]:before {
  background-color: #4caf50;
}

.table-schedule .lecture-time[data-event="lecture-07"] {
  background: #fff3e0;
}
.table-schedule .lecture-time[data-event="lecture-07"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-07"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-07"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-07"] .lecture-noti-title {
  color: #ff9800;
}
.table-schedule .lecture-time[data-event="lecture-07"]:hover {
  background-color: #ffe0b2;
}
.table-schedule .lecture-time[data-event="lecture-07"]:before {
  background-color: #ff9800;
}

.table-schedule .lecture-time[data-event="lecture-08"] {
  background: #eeebff;
}
.table-schedule .lecture-time[data-event="lecture-08"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-08"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-08"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-08"] .lecture-noti-title {
  color: #0078ff;
}
.table-schedule .lecture-time[data-event="lecture-08"]:hover {
  background-color: #bbcafb;
}
.table-schedule .lecture-time[data-event="lecture-08"]:before {
  background-color: #0078ff;
}

.table-schedule .lecture-time[data-event="lecture-09"] {
  background: #e9ecf3;
}
.table-schedule .lecture-time[data-event="lecture-09"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-09"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-09"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-09"] .lecture-noti-title {
  color: #5f7f90;
}
.table-schedule .lecture-time[data-event="lecture-09"]:hover {
  background-color: #cdd7e0;
}
.table-schedule .lecture-time[data-event="lecture-09"]:before {
  background-color: #5f7f90;
}

.table-schedule .lecture-time[data-event="lecture-10"] {
  background: #fbe9e7;
}
.table-schedule .lecture-time[data-event="lecture-10"] .lecture-title,
.table-schedule .lecture-time[data-event="lecture-10"] .lecture-location,
.table-schedule .lecture-time[data-event="lecture-10"] .ic-lecture-noti,
.table-schedule .lecture-time[data-event="lecture-10"] .lecture-noti-title {
  color: #ff5722;
}
.table-schedule .lecture-time[data-event="lecture-10"]:hover {
  background-color: #ffccbc;
}
.table-schedule .lecture-time[data-event="lecture-10"]:before {
  background-color: #ff5722;
}

.modal-header {
  border-bottom: 0;
}

.modal-body {
  padding: 0 2rem 2rem;
}
.modal-body .lecture-title {
  font-weight: 600;
}
.modal-body .lecture-info {
  margin-top: 2rem;
}
.modal-body .lecture-info .ic-lecture-info {
  margin-right: 0.5rem;
  font-size: 1.25rem;
}
.modal-body .lecture-info li {
  display: flex;
  align-items: center;
  margin-bottom: 0.125rem;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6;
  color: #263747;
}
.modal-body .lecture-description,
.modal-body .lecture-memo {
  margin-top: 1rem;
}
.modal-body .lecture-description .txt-description,
.modal-body .lecture-memo .txt-description {
  margin-bottom: 0;
  font-weight: 400;
}
.modal-body .lecture-description .memo-list,
.modal-body .lecture-memo .memo-list {
  display: flex;
}
.modal-body .lecture-description .memo-list .memo-content,
.modal-body .lecture-memo .memo-list .memo-content {
  max-width: 20rem;
}
.modal-body .lecture-description .memo-list .memo-content .ic-lecture-noti,
.modal-body .lecture-memo .memo-list .memo-content .ic-lecture-noti {
  vertical-align: sub;
  font-size: 1.25rem;
}
.modal-body .lecture-description .memo-list .memo-content .lecture-noti-title,
.modal-body .lecture-memo .memo-list .memo-content .lecture-noti-title {
  font-size: 1.125rem;
}
.modal-body .lecture-description .memo-list .memo-btn,
.modal-body .lecture-memo .memo-list .memo-btn {
  margin-left: auto;
}
.modal-body .lecture-description .memo-list .memo-btn .ic-lecture-noti,
.modal-body .lecture-memo .memo-list .memo-btn .ic-lecture-noti {
  color: #b2c0cc;
}
.modal-body .lecture-description .memo-list .memo-btn .ic-lecture-noti:hover,
.modal-body .lecture-memo .memo-list .memo-btn .ic-lecture-noti:hover {
  color: #f44336;
}
.modal-body .lecture-description {
  background-color: #f7f7fb;
  border-radius: 0.75rem;
  padding: 1rem;
}
.modal-body .lecture-memo .form-group {
  margin-bottom: 0;
}
.modal-body .lecture-memo .form-group label {
  margin-bottom: 0.25rem;
}
.modal-body .lecture-memo .form-group label:hover {
  cursor: pointer;
}
.modal-body .lecture-memo .form-group label input {
  margin-right: 0.25rem;
}
.modal-body .lecture-memo .form-group label input:hover {
  cursor: pointer;
}

.modal-footer .left {
  margin-right: auto;
}
.modal-footer .right {
  display: flex;
}
.modal-footer .right .btn-danger {
  margin-left: 0.375rem;
}
.modal-footer .btn {
  font-weight: 500;
}
.modal-footer .btn-light {
  background-color: #e9ecf3;
  border-color: #e9ecf3;
  font-weight: 500;
}
.modal-footer .btn-light:hover {
  color: #263747;
  background-color: #d7e2eb;
  border-color: #d7e2eb;
}
.modal-footer .btn-light-danger {
  color: #f44336;
  background-color: #ffebee;
  border-color: #ffebee;
}
.modal-footer .btn-light-danger:hover {
  color: #d32f2f;
  background-color: #ffdde0;
  border-color: #ffdde0;
}
.modal-footer .btn-light-primary {
  color: #0078ff;
  background-color: #eeebff;
  border-color: #eeebff;
}
.modal-footer .btn-light-primary:hover {
  color: #0053f4;
  background-color: #d8ddff;
  border-color: #d8ddff;
}

.popover-body .schedule-title {
  margin: 1rem 0 1.5rem;
}
.popover-body .form-group {
  position: relative;
  margin-bottom: 0.5rem;
}
.popover-body .form-group .col-form-label {
  width: 100%;
}
.popover-body .form-group label {
  font-size: 12px;
  line-height: 1.5;
  display: inline-block;
  margin-bottom: 0.125rem;
  padding-bottom: 0;
}
.popover-body .form-group .form-control {
  padding: 0.5rem;
  height: 2.5rem;
  border: 0.0625rem solid #d7e2eb;
  cursor: pointer;
  background-size: 0.625rem 0.3125rem;
  background-color: #fbfbfd;
}
.popover-body .form-group input:hover,
.popover-body .form-group textarea:hover {
  cursor: auto;
}
.popover-body .form-group textarea {
  min-height: 7.5rem;
}
.popover-body .btn-save {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
</style>
