-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2021 at 01:09 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jb_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_agent`
--

CREATE TABLE `tbl_agent` (
  `id` int(11) NOT NULL,
  `agentname` varchar(50) NOT NULL,
  `contact` varchar(10) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_agent`
--

INSERT INTO `tbl_agent` (`id`, `agentname`, `contact`, `status`) VALUES
(1, 'Adityab', '8989898900', 'active'),
(2, 'Demo Agent', '1111111111', 'active'),
(3, 'Aditya B', '123456', 'active'),
(4, 'Vinod', '123456', 'active'),
(5, 'Noah', '123', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_client`
--

CREATE TABLE `tbl_client` (
  `id` int(11) NOT NULL,
  `agentname` varchar(50) NOT NULL,
  `agent_id` varchar(10) NOT NULL,
  `servicename` varchar(50) NOT NULL,
  `service_id` varchar(10) NOT NULL,
  `isWhatsapp` varchar(5) NOT NULL,
  `isPrint` varchar(5) NOT NULL,
  `paymentmode` varchar(100) NOT NULL,
  `clientname` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `firmname` varchar(50) NOT NULL,
  `contact` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `task` text NOT NULL,
  `assigned_userid` int(10) NOT NULL,
  `assigned_username` varchar(20) NOT NULL,
  `status` varchar(10) NOT NULL,
  `total_amount` int(7) NOT NULL,
  `deposited_amount` int(7) NOT NULL,
  `remaining_amount` int(7) NOT NULL,
  `submission_date` varchar(20) NOT NULL,
  `registered_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_client`
--

INSERT INTO `tbl_client` (`id`, `agentname`, `agent_id`, `servicename`, `service_id`, `isWhatsapp`, `isPrint`, `paymentmode`, `clientname`, `address`, `firmname`, `contact`, `email`, `task`, `assigned_userid`, `assigned_username`, `status`, `total_amount`, `deposited_amount`, `remaining_amount`, `submission_date`, `registered_date`) VALUES
(9, 'Adityab', '1', 'Shop Act', '2', '0', '0', 'Paytm', 'Aditya Bhalerao', 'Auranbagad', 'SWS', 2147483647, 'adityab@swebsolutions.in', 'Test Entry', 3, 'aditya', 'completed', 10000, 5000, 5000, '17/03/2021', '2021-03-01 04:53:13'),
(10, 'Adityab', '1', 'Shop Act', '2', '0', '0', '', 'Aditya Bhalerao', 'Auranbagad', 'SWS', 2147483647, 'adityab@swebsolutions.in', 'Test Entry', 1, 'Adityab', 'pending', 10000, 5000, 5000, '06/03/2021', '2021-03-01 04:54:26'),
(11, 'Adityab', '1', 'Shop Act', '2', '0', '0', '', 'Aditya Bhalerao', 'Auranbagad', 'SWS', 2147483647, 'adityab@swebsolutions.in', 'Test Entry', 6, ' Select User ', 'pending', 10000, 5000, 5000, '08/03/2021', '2021-03-01 04:54:46'),
(12, 'Demo Agent', '2', 'Shop Act', '2', '0', '0', '', 'a', 'e', 'b', 0, 'd', 'f', 1, 'Adityab', 'Rejected', 1000, 0, 1000, '12/03/2021', '2021-03-01 04:56:57'),
(13, 'Vinod', '4', 'GST', '1', '0', '0', '', 's', 's', 's', 0, 's', 's', 5, 'user', 'pending', 2, 1, 1, '10/03/2021', '2021-03-01 04:59:09'),
(14, 'Noah', '5', 'GST', '1', '1', '0', 'Gpay', 'Noah Nirmal', 'jalna', 'SWS', 123123, 'asdasd', 'Gst doc', 5, 'user', 'completed', 10000, 5000, 5000, '27/03/2021', '2021-03-01 10:29:42');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_services`
--

CREATE TABLE `tbl_services` (
  `id` int(11) NOT NULL,
  `services` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_services`
--

INSERT INTO `tbl_services` (`id`, `services`, `description`, `status`) VALUES
(1, 'GST', 'GST', 'active'),
(2, 'Shop Act', 'NA', 'active'),
(3, 'Udyog Aadhar', 'NA', 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `password` varchar(20) NOT NULL,
  `role` varchar(5) NOT NULL,
  `status` varchar(8) NOT NULL,
  `email` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `username`, `contact`, `password`, `role`, `status`, `email`, `address`) VALUES
(1, 'Adityab', '123', '456', 'admin', 'active', 'demo email', 'demo add'),
(2, 'Demo Agentq2', '1111111111', 'user', 'user', 'active', 'user@e.com', 'gad'),
(3, 'aditya', '1111111111', '123', 'user', 'active', 'b@a.com', 'aurangabad'),
(4, 'asdf', '1234', '123', 'user', 'inactive', 'sdf', 'asdsd'),
(5, 'user', '123', '123', 'user', 'active', 'a@a.com', 'aurangabad'),
(6, 'Aditya', '8275325686', '123123', 'user', 'inactive', 'aditya@gmail.com', 'aurangabad'),
(7, 'aa', '1235', 'qwe', 'user', 'inactive', 'sfsd', 'sdfsdf');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_agent`
--
ALTER TABLE `tbl_agent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_client`
--
ALTER TABLE `tbl_client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_agent`
--
ALTER TABLE `tbl_agent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_client`
--
ALTER TABLE `tbl_client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
