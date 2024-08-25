import { useState } from 'react'
import useCurrencyInfo from './hook/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [curr, setCurrAmount] = useState(0)
  const [fromCurr, setFromCurr] = useState("usd")
  const [toCurr, setToCurr] = useState("inr")
  const currencyInfo = useCurrencyInfo(fromCurr)
  console.log(currencyInfo)
  const currOps = Object.keys(currencyInfo)

  const swap = ()=>{
    setFromCurr(toCurr)
    setToCurr(fromCurr)
    setAmount(curr)
    setCurrAmount(amount)
  }

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center relative'
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url('https://tradermade.com/static/uploads/currency_converter.webp')",
          }}
        ></div>
        <div className="absolute inset-0   backdrop-blur-md"></div>
        <div className='flex flex-col w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 z-10 '>
          <div className='w-full flex flex-wrap p-5 bg-slate-50 mt-4 mb-2 rounded-md border-gray-60'>
            <div>
              <label className="block" htmlFor="onit">From:</label>
              <input
                id='onit'
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="outline-none w-52 bg-transparent py-1.5"
              />
            </div>
            <select
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
              name="Select Currency"
              onChange={(e) => setFromCurr(e.target.value)}
              value={fromCurr}>
              {
                currOps.map((cure) => (
                  <option key={cure} value={cure}>
                    {cure}
                  </option>
                ))
              }
            </select>
          </div>
          <div className='relative w-full flex justify-center'>
            <button
            className='"absolute -my-4 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1'
            onClick={swap}>Swap</button>
          </div>
          <div className='w-full flex flex-wrap p-5 bg-slate-50 mt-2 mb-4 rounded-md border-gray-60'>
            <div>
              <label className="block" htmlFor="onit">To:</label>
              <input
                id='onit'
                type="number"
                value={curr}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="outline-none w-52 bg-transparent py-1.5"
                readOnly
              />
            </div>
            <select
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
              name="Select Currency"
              onChange={(e) => setToCurr(e.target.value)}
              value={toCurr}>
              {
                currOps.map((cure) => (
                  <option key={cure} value={cure}>
                    {cure}
                  </option>
                ))
              }
            </select>
          </div>
          <button className='px-3 py-5 bg-blue-700 text-white rounded-2xl my-5'
            onClick={() => setCurrAmount(amount * currencyInfo[toCurr])}> Convert {fromCurr.toUpperCase()} to {toCurr.toUpperCase()} </button>
        </div>
      </div>
    </>
  )
}

export default App
