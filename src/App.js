import React  , {useState , useEffect} from 'react';
import './App.css';
import Countries from './components/Countries'
import Header from './components/Header'
import Cards  from './components/Cards'
function App() {
  const [coviddata , setCoviddata] = useState();
  const [loading , setLoading] = useState(true);
  const [countries  ,setCountries] = useState([]);
  const [dailydata , setDailydata ] =useState({});

  useEffect(()=>{

     async function fetchData(){
        const response = await fetch("https://covid19.mathdro.id/api")
        const data = await response.json()
        setCoviddata(data);
        setLoading(false)
        console.log(data)
     }

     fetchData()
   } , [])


   useEffect(()=>{

      async function getCountries(){
         await fetch("https://covid19.mathdro.id/api/countries")
         .then(response => response.json())
         .then(data =>{
           console.log(data.countries)
           setCountries(data.countries)
           setLoading(false)
         })
      }

      getCountries()
     } , [])

     useEffect(()=>{

        async function fetchDailyData(){
          try{
          await fetch("https://covid19.mathdro.id/api/daily")
          .then(response =>  response.json())
          .then (data => {
            console.log(data)
            setDailydata(data)
            setLoading(false)
          })
        }
        catch(error){
          console.log(error)
        }
        }
          fetchDailyData()
       } , [])
  return (
    <div className="App">
  {!loading || coviddata !== undefined ? (
    <div>
   <Header />
    <Cards loading = {loading} totalCases = {coviddata}/>
    <Countries countries = {countries} loading = {loading} coviddata = {coviddata} />

    </div>
  ):(
    <div>
      Loading ....
    </div>
  )}


  </div>);
}

export default App;
