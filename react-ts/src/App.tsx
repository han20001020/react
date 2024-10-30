import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className="profile-header">
        <h1>Po-Han Lu </h1>
        <h2>盧柏翰</h2>
        <h3>淡江大學資訊管理學系四年級</h3>
        <p>這是課程作業!!</p>
      </header>

      <section className="skills-section card">
        <h4>技能</h4>
        <ul>
          <li>java Programming</li>


        </ul>
      </section>

      <section className="contact-section card">
        <h4>聯絡方式</h4>
        <ul>
          <li><strong>Line ID:</strong> null</li>
          <li><strong>Email:</strong> null</li>
        </ul>
      </section>
      <section className="experience-section card">
        <h4>經歷</h4>
        <ul>
          <li><em>2020-2021</em>&nbsp;<strong>大學一年級</strong>
            <ol>
              <li>null</li>
            </ol>
          </li>
          <li><em>2023-2024</em>&nbsp;<strong>大學二年級</strong>
            <ol>
              <li>null</li>

            </ol>
          </li>
          <li><em>2024-2025</em>&nbsp;<strong>大學三年級</strong>
            <ol>
              <li>null</li>

            </ol>
          </li>
        </ul>
      </section>

    </>
  )
}

export default App
