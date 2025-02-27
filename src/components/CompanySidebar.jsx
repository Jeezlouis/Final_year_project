import React from 'react'

const CompanySidebar = () => {
  return (
    <div>
      <nav className="p-4">
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-blue-100 rounded">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-blue-100 rounded">Job Postings</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-blue-100 rounded">Applications</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-blue-100 rounded">Candidates</a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 hover:bg-blue-100 rounded">Notifications</a>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default CompanySidebar