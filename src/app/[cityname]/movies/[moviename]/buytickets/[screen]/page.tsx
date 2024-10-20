'use client'
import React from 'react'
import './SelectSeat.css'
import Link from 'next/link';

const page = () => {
 const movie ={
  moviename :'Martin',
  // screen :'4Dx',
  date : new Date(),
  language : 'Hindi',
  type : 'Action/Thriller/Drama',
  screens : [
   {
    name: 'Screen 1',
    location: 'Fcube cinemas, kl tower'
   },
   {
    name: 'Screen 2',
    location: 'Fcube cinemas, kl tower'
   },
   {
    name: 'Screen 3',
    location: 'Fcube cinemas, kl tower'
   }
  ]
 }


 const screen ={
    name: 'Screen 1',
    location: 'Fcube cinemas, kl tower',
   timeslots:[{
    time:'10:00 AM',
    seats: [
     {
      //platinum
      type: 'platinum',
      rows:[
       {
        //row 2
        rowname: 'H',
        cols:[
         //col 1
         {
          seats: [
           {
            types:'seat',
            status: 'not-available',
            seat_id: '1'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '2'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '3'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '4'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '5'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '6'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '7'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '8'
           }
          ]
         },
         //col 2
         {
          seats: [
           {
            types:'seat',
            status: 'not-available',
            seat_id: '1'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '2'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '3'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '4'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '5'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '6'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '7'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '8'
           }
          ]
         }
        ],
       },
       {
        //row 2
        rowname: 'I',
        cols:[
         //col 1
         {
          seats: [
           {
            types:'seat',
            status: 'not-available',
            seat_id: '1'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '2'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '3'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '4'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '5'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '6'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '7'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '8'
           }
          ]
         },
         //col 2
         {
          seats: [
           {
            types:'seat',
            status: 'not-available',
            seat_id: '1'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '2'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '3'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '4'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '5'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '6'
           },
           {
            types:'seat',
            status: 'not-available',
            seat_id: '7'
           },
           {
            types:'seat',
            status: 'available',
            seat_id: '8'
           }
          ]
         }
        ],
       }
      ],
      price: 500
     },
    ]},
    {
     time:'1:00 PM',
     seats: [
      {
       //platinum
       type: 'platinum',
       rows:[
        {
         //row 2
         rowname: 'H',
         cols:[
          //col 1
          {
           seats: [
            {
             types:'seat',
             status: 'not-available',
             seat_id: '1'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '2'
            },
            {
             types:'seat',
             status: 'not-available',
             seat_id: '3'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '4'
            },
            {
             types:'seat',
             status: 'not-available',
             seat_id: '5'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '6'
            },
            {
             types:'seat',
             status: 'not-available',
             seat_id: '7'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '8'
            }
           ]
          },
          //col 2
          {
           seats: [
            {
             types:'seat',
             status: 'not-available',
             seat_id: '1'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '2'
            },
            {
             types:'seat',
             status: 'not-available',
             seat_id: '3'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '4'
            },
            {
             types:'seat',
             status: 'not-available',
             seat_id: '5'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '6'
            },
            {
             types:'seat',
             status: 'not-available',
             seat_id: '7'
            },
            {
             types:'seat',
             status: 'available',
             seat_id: '8'
            }
           ]
          }
         ]
        }
       ],
       price: 500
      },
     ]},
     {
      time:'4:00 PM',
      seats: [
       {
        //platinum
        type: 'platinum',
        rows:[
         {
          //row 2
          rowname: 'H',
          cols:[
           //col 1
           {
            seats: [
             {
              types:'seat',
              status: 'not-available',
              seat_id: '1'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '2'
             },
             {
              types:'seat',
              status: 'not-available',
              seat_id: '3'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '4'
             },
             {
              types:'seat',
              status: 'not-available',
              seat_id: '5'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '6'
             },
             {
              types:'seat',
              status: 'not-available',
              seat_id: '7'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '8'
             }
            ]
           },
           //col 2
           {
            seats: [
             {
              types:'seat',
              status: 'not-available',
              seat_id: '1'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '2'
             },
             {
              types:'seat',
              status: 'not-available',
              seat_id: '3'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '4'
             },
             {
              types:'seat',
              status: 'not-available',
              seat_id: '5'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '6'
             },
             {
              types:'seat',
              status: 'not-available',
              seat_id: '7'
             },
             {
              types:'seat',
              status: 'available',
              seat_id: '8'
             }
            ]
           }
          ]
         }
        ],
        price: 500
       },
      ]}
   ]}

 const generateSeatLayout = () =>{
  const x = screen.timeslots.findIndex((t:any) => t.time === selectedTime.time)
    return screen.timeslots[x].seats.map((seatType, index)=>(
     <div className='seat-type' key={index}>
      <h2>{seatType.type}- Rs. {seatType.price}</h2>
      <div className='seat-rows'>
       {
        seatType.rows.map((row, rowIndex)=>(
         <div className='seat-row' key={rowIndex}>
          <p className='rowname'>{row.rowname}</p>
          <div className='seat-cols'>
           {
            row.cols.map((col,colIndex) =>(
             <div className='seat-col' key={colIndex}>
              {col.seats.map((seat, seatIndex) => (
               <div key={seatIndex}>
                {
                 seat.status == 'available' &&
                 <span className={
                  selectedSeats.find((s:any) => {
                   //rowid and colid and seatid
                   return s.row === row.rowname && s.seat_id === seat.seat_id && s.colIndex
                  }) ? "seat-selected" : "seat-available"
                 }
                 onClick={()=> selectdeseleactseat({
                  row: row.rowname,
                  col: colIndex,
                  seat_id: seat.seat_id,
                  price: seatType.price
                 })}>
                  {seatIndex+1}
                 </span>
                }

                {
                 seat.status == 'not-available'&&
                 <span className='seat-unavailable'>
                  {seatIndex+1}
                 </span>
                }
               </div>
              ))}
             </div>
            ))
           }
          </div>
         </div>
        ))
       }
      </div>
     </div>
    ))
   }

 const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])
 
 const [selectedSeats, setSelectedSeats] = React.useState<any[]>([])
 const selectdeseleactseat = (seat: any) => {
  const isselected = selectedSeats.findIndex((s:any) =>{
   return s.row == seat.row && s.col == seat.seat_id
  })

  if (isselected) {
   //deselect
   setSelectedSeats(selectedSeats.filter((s:any) => s.seat_id !== seat.seat_id))
  }
  else {
   //select
   setSelectedSeats([...selectedSeats, seat])
  }
 } 

  return (
    <div className='selectseatpage'>
     <div className='s1'>
      <div className='head'>
       <h1>{movie.moviename} - {movie.language}</h1>
       <h3>{movie.type}</h3>
      </div>
     </div>
     <div className='selectseat'>
      <div className='timecont'>
       {screen.timeslots.map((time:any, index:number) =>(
        <h3 
        className={selectedTime.time === time.time ? 'time selected'
         : 'time'}
         onClick={() => {
          setSelectedTime(time)
          // setSelectedTime([])
         }}
         key={index}
         >
         {time.time}
        </h3 >
       ))}
      </div>
      <div className='indicators'>
       <div>
        <span className='seat-unavailable'></span>
        <p>Not available</p>
       </div>
       <div>
       <span className='seat-available'></span>
        <p>Available</p>
        </div>
        <div>
       <span className='seat-selected'></span>
        <p>Selected</p>
        </div>
      </div>
      {generateSeatLayout()}
      <div className='totalcont'></div>
     </div>
    </div>
  )
}

export default page