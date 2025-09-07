import './App.css'
import "./MainPage.tsx"
import MainPage from './MainPage.tsx'

function App() {
  return (
    <>
      <h1> Nano Technology Engineering Class Backups </h1>
      <h2> Class Notes and Resources Hosted by MrDNAlex </h2>
      <h3>Be Mindful and Respectful of the following:</h3>
      <p>
        1. DO NOT SPAM DOWNLOAD. Larger files takes a few seconds to start (10 - 30 seconds). <br />
        2. Please do not share these files with anyone outside of the class. Ask before sharing. <br />
        3. Please do not use these files for commercial purposes. <br />
        Contact me for Questions, Concerns, Issues, Suggestions or Contributions : a3dufres@uwaterloo.ca <br />
      </p>

      <MainPage />

      <h3>Website Info and Patch Notes</h3>
      <p>
        Website Version v0.1.5 - Jun 03 2025 <br />
        v0.1.3 - May 22 2025 - Added Organized Version of NE 336. Missing Files were added and Course Organized. Removed some overprotective rules <br />
        v0.1.4 - Jun 03 2025 - Added Raspberry Pi 4 Docker Build Support <br />
        v0.1.5 - Jun 03 2025 - Made Table Text Larger, Added Alert Popup for Files Larger than 1 GB. It will warn that files may take more than 1 Min to start Downloading, Moving Webiste to Raspberry Pi for the Week <br />
      </p>
    </>
  )
}

export default App