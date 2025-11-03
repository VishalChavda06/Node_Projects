import './App.css'
import UsersTable from './components/UsersTable'
import ProductsTable from './components/ProductsTable'
import QuotesTable from './components/QuotesTable'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 p-8 w-full">
      <main className="w-full max-w-full mx-auto">
        <div className="grid grid-cols-1 gap-8 w-full">
          <UsersTable />
          <ProductsTable />
          <QuotesTable />
        </div>
      </main>
    </div>
  )
}

export default App
