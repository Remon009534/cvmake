import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useState } from 'react';

function App() {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        target.classList.add('active');
    })
  });

  const dialog = document.querySelector('dialog');

  function openDialog()
  {
    dialog.showModal();
  }
  function closeDialog()
  {
    dialog.close();
  }
  function changeHeaderColor(event)
  {
    const x = document.querySelector('#color');
    document.querySelector('#title').style.backgroundColor = x.value
  }
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sum, setSum] = useState("");
  const [insti, setInsti] = useState("");
  const [degree, setDegree] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [gpa, setGpa] = useState("");
  const gpaAsNumber = Number(gpa);
  const [position, setPosition] = useState("");
  const [empName, setEmpName] = useState("");
  const [responsible, setResponsible] = useState("");
  const [location2, setLocation2] = useState("");
  const [exp, setExp] = useState("");
  const [coursework, setCoursework] = useState("");
  const [linkedln, setLinkedln] = useState("");
  const [startDate, setStartDate] = useState("");
  const [honors, setHonors] = useState("");
  const [skill, setSkill] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [tool, setTool] = useState("");
  return (
    <>
    <section id='main' data-tab-content className='active'>
      <div className='title'>
        <header>
          <div className='logo'>
            <h1>QuickCV</h1>
          </div>
          <div className='link'>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#'>Prize</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
          </div>
          <div className='button'>
            <button id='btn'>My account</button>
          </div>
        </header>
        <div className='center'>
          <div id='title'>
            <h1>Make your own CV quicker</h1>
            <p>Customize your CV for each job application. Highlight relevant skills and experiences that match the job description.</p>
            <div className='button2'>
              <button data-tab-target='#main2' id='btn'>Create your CV now</button>
            </div>
          </div>
          <div id='image'></div>
        </div>
      </div>
      <div className='about' id='about'>
        <div id='que'>
          <h1>Why we should make an CV application</h1>
        </div>
        <div id='list'>
          <div id='item'>
            <h1>Centralized Information</h1>
            <p> It allows you to store and manage all your professional information in one place, making it easier to update and tailor your CV for different job applications.</p>
          </div>
          <div id='item'>
            <h1>Customization</h1>
            <p>A CV application can help you customize your resume for specific jobs, highlighting relevant skills and experiences to align with the job description.</p>
          </div>
          <div id='item'>
            <h1>Ease of Use</h1>
            <p>Many CV applications offer templates and formatting options, making it easier to create a visually appealing and professional document without design skills.</p>
          </div>
        </div>
      </div>
    </section>
    <section id='main2' data-tab-content>
      <button data-tab-target="#main" id='btn'>back</button>
      <div className='main2'>
        <div id='fill'>
          <div id='personal'>
            <h1>Personal Information</h1>
            <form>
              <input type='text' value={name} onChange={(event) => setName(event.target.value)} id='name' name='name' placeholder='Name'></input>
              <input type='text' value={phone} onChange={(event) => setPhone(event.target.value)} id='phone' name='phone' placeholder='phoneNumber'></input>
              <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} id='email' name='email' placeholder='example@mail.com'></input>
              <input type='text' value={address} onChange={(event) => setAddress(event.target.value)} id='address' name='address' placeholder='address'></input>
              <input type='text' value={linkedln} onChange={(event) => setLinkedln(event.target.value)} id='linkedln' name='linkedln' placeholder='linkedln account'></input>
              <textarea value={sum} onChange={(event) => setSum(event.target.value)} placeholder='summary'></textarea>
            </form>
          </div>
          <div id='education'>
            <h1>Education</h1>
            <form>
              <input type='text' value={insti} onChange={(event) => setInsti(event.target.value)} id='school' name='school' placeholder='Institution'></input>
              <input type='text' value={degree} onChange={(event) => setDegree(event.target.value)} id='degree' name='degree' placeholder='Degree'></input>
              <input type='text' value={location} onChange={(event) => setLocation(event.target.value)} id='location' name='location' placeholder='Location'></input>
              <input type='number' value={gpaAsNumber} onChange={(event) => setGpa(event.target.value)} id='gpa' name='gpa'></input>
              <input type='date' value={startDate} onChange={(event) => setStartDate(event.target.value)} id='startDate' name='startDate'></input>
              <input type='text' value={honors} onChange={(event) => setHonors(event.target.value)} id='honors' name='honors' placeholder='honors'></input>
              <input type='text' value={coursework} onChange={(event) => setCoursework(event.target.value)} id='coursework' name='coursework' placeholder='coursework'></input>
            </form>
          </div>
          <div id='experience'>
            <h1>Experience</h1>
            <form>
              <input type='text' value={position} onChange={(event) => setPosition(event.target.value)} id='Position' name='Position' placeholder='Position'></input>
              <input type='text' value={empName} onChange={(event) => setEmpName(event.target.value)} id='empName' name='empName' placeholder='Company Name'></input>
              <input type='text' value={location2} onChange={(event) => setLocation2(event.target.value)} id='location2' name='location2' placeholder='Location'></input>
              <input type='text' value={exp} onChange={(event) => setExp(event.target.value)} id='exp' name='exp' placeholder='Experience'></input>
              <input type='text' value={tool} onChange={(event) => setTool(event.target.value)} id='tool' name='tool' placeholder='Software or tools'></input>
              <input type='text' value={responsible} onChange={(event) => setResponsible(event.target.value)} id='responsibilities' name='responsibilities' placeholder='responsibilities'></input>
            </form>
          </div>
          <div id='skills'>
            <h1>Skills</h1>
            <form>
              <input type='text' value={skill} onChange={(event) => setSkill(event.target.value)} id='skill' name='skill' placeholder='skill1'></input>
              <input type='text' value={skill2} onChange={(event) => setSkill2(event.target.value)} id='skill2' name='skill2' placeholder='skill2'></input>
              <input type='text' value={skill3} onChange={(event) => setSkill3(event.target.value)} id='skill3' name='skill3' placeholder='skill3'></input>
              <input type='text' value={skill4} onChange={(event) => setSkill4(event.target.value)} id='skill4' name='skill4' placeholder='skill4'></input>
            </form>
          </div>
          <div id='button'>
            <button id='btn6' onClick={openDialog}>Edit</button>
          </div>
        </div>
        <div id='cv'>
          <div id='title'>
            <h1>{name}</h1>
            <ul>
              <li>{email}</li>
              <hr></hr>
              <li>{phone}</li>
              <hr></hr>
              <li>{address}</li>
              <hr></hr>
              <li>{linkedln}</li>
            </ul>
          </div>
          <hr></hr>
          <div id='summary'>
            <p>{sum}</p>
          </div>
          <hr></hr>
          <div id='edu'>
            <h2>Education</h2>
            <div id='edname'>
              <h3>{degree}</h3>
              <p><span>{insti}</span> / <span>{location}</span> / <span>{startDate}</span></p>
            </div>
            <ul>
              <li>{gpa}</li>
              <li>{honors}</li>
              <li>{coursework}</li>
            </ul>
          </div>
          <hr></hr>
          <div id='exp'>
            <h2>Relevant Experience</h2>
            <div id='exname'>
              <h3>{position}</h3>
              <p><span>{empName}</span> / <span>{location2}</span> / <span>Start Year</span></p>
            </div>
            <ul>
              <li>{responsible}</li>
              <li>{exp}</li>
              <li> software, tools or programs names</li>
            </ul>
          </div>
          <hr></hr>
          <div id='skill'>
            <h2>Skills</h2>
            <ul>
              <li>{skill}</li>
              <li>{skill2}</li>
              <li>{skill3}</li>
              <li>{skill4}</li>
            </ul>
          </div>
        </div>
      </div>
      <dialog>
        <form>
          <label>
            Header color:-
            <input type='color' id='color' name='color' onChange={changeHeaderColor}></input>
          </label>
        </form>
        <button id='btn7' onClick={closeDialog}>close</button>
      </dialog>
    </section>
    </>
  );
}

export default App;
