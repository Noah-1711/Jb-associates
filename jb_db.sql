-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 17, 2021 at 07:20 AM
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
-- Table structure for table `tbl_client`
--

CREATE TABLE `tbl_client` (
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
  `submission_date` varchar(15) NOT NULL,
  `registered_date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_client`
--

INSERT INTO `tbl_client` (`clientname`, `address`, `firmname`, `contact`, `email`, `task`, `assigned_userid`, `assigned_username`, `status`, `total_amount`, `deposited_amount`, `remaining_amount`, `submission_date`, `registered_date`) VALUES
('Aditya ', 'sdfsdf', 'sdfsdf', 34324, 'asdfsd', 'sdfsdfsdf', 2, '<option> Select User', 'pending', 2000, 500, 1500, '17/02/2021', '2021-02-16 15:31:54');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `contact` int(11) NOT NULL,
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
(1, 'admin', 1234567890, 'admin', 'admin', 'active', 'admin@gmail.com', 'aurangabad'),
(2, 'user', 1111111111, 'user', 'user', 'active', 'user@gmail.com', 'aurangabad'),
(3, 'aditya', 1111111111, '123', 'user', 'inactive', 'a@a.com', 'aurangabad'),
(4, 'asdf', 123, '1231', 'user', 'inactive', 'sdf', 'asdsd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
