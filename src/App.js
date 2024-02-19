// src/components/App.js
import React, { Component } from 'react';
import './App.css';
import { LiaFileImportSolid } from "react-icons/lia";
import { FiArrowRightCircle } from "react-icons/fi";
import { IoPrintOutline } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";

class App extends Component {
   render() {
        const orders = [
            { channelImg: 'https://res.cloudinary.com/dhscilqq8/image/upload/v1708283355/download_bji4et.png', orderNo: '#IN123456789', orderDate: '2022-05-24', city: 'Lucknow', customerName: 'Abhinav Dixit', orderValue: 8.00, status: 'Pending' },
            { channelImg: 'https://res.cloudinary.com/dhscilqq8/image/upload/v1708283355/download_bji4et.png', orderNo: '#IN123456789', orderDate: '2022-05-24', city: 'Lucknow', customerName: 'Abhinav Dixit', orderValue: 8.00, status: 'Pending' },
            { channelImg: 'https://res.cloudinary.com/dhscilqq8/image/upload/v1708283355/download_bji4et.png', orderNo: '#IN123456789', orderDate: '2022-05-24', city: 'Lucknow', customerName: 'Abhinav Dixit', orderValue: 8.00, status: 'Pending' },
            { channelImg: 'https://res.cloudinary.com/dhscilqq8/image/upload/v1708283355/download_bji4et.png', orderNo: '#IN123456789', orderDate: '2022-05-24', city: 'Lucknow', customerName: 'Abhinav Dixit', orderValue: 8.00, status: 'Pending' },
        ];

        return (
            <div>
                <div className="new-navbar">
                    <h1>Pending</h1>
                    <h1>Accepted</h1>
                    <h1>AWB Created</h1>
                    <h1>Ready to Ship</h1>
                    <h1>Shipped</h1>
                    <h1>Completed</h1>
                    <h1>Cancelled</h1>
                </div> 
                <div className='container'>
                  <div className='inside-container'>
                    <div className='box'><LiaFileImportSolid /> Import Orders</div>
                    <div className='box23'><FiArrowRightCircle/> Accept</div>
                    <div className='box23'><IoPrintOutline/>Print</div>
                  </div>
                  <button><LuRefreshCw/>Refresh</button>
                </div>
                <div className="order-table">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Channel</th>
                                <th>Order No.</th>
                                <th>Order Date</th>
                                <th>City</th>
                                <th>Customer Name</th>
                                <th>Order Value</th>
                                <th>Status</th>
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>+</td>
                                    <td>
                                        <input type="checkbox"/>
                                    </td>
                                    <td>
                                        <img src={order.channelImg} alt="Channel Logo"  />
                                    </td>
                                    <td>{order.orderNo}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.city}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.orderValue}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <select>
                                            <option value="edit">Action</option>
                                            <option value="delete">None</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
