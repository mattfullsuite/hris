-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 19, 2023 at 09:17 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fs_hris_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcements`
--

CREATE TABLE `announcements` (
  `ann_id` int(100) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `ann_title` varchar(255) NOT NULL,
  `ann_content` varchar(500) NOT NULL,
  `ann_category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`ann_id`, `emp_id`, `ann_title`, `ann_content`, `ann_category`) VALUES
(2, 2, 'Christmas Party Announcement', 'Christmas Party, please wear festive costumes.', 'Urgent');

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `client_id` int(11) NOT NULL,
  `client_name` varchar(255) NOT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`client_id`, `client_name`, `date_start`, `date_end`) VALUES
(1, 'Not Applicable', NULL, NULL),
(2, 'Clarivine', NULL, NULL),
(3, 'Dorm Room', NULL, NULL),
(4, 'Bracket Capital', NULL, NULL),
(5, 'Cluster B', NULL, NULL),
(6, 'Pik-Nik', NULL, NULL),
(7, 'Redica', NULL, NULL),
(8, 'Viascari', NULL, NULL),
(9, 'Cluster A', NULL, NULL),
(10, 'Cluster C', NULL, NULL),
(11, 'Cluster D', NULL, NULL),
(12, 'Cluster E', NULL, NULL),
(13, 'Backup Team', NULL, NULL),
(14, 'TechGC', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_loc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_loc`) VALUES
(1, 'FullSuite', 'Baguio City'),
(2, 'TeeTalkPH', 'Baguio City'),
(3, 'Viascari', 'Baguio City'),
(4, 'Envie', '');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(11) NOT NULL,
  `div_id` int(11) NOT NULL,
  `dept_name` varchar(255) NOT NULL,
  `manager_id` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`dept_id`, `div_id`, `dept_name`, `manager_id`) VALUES
(1, 0, 'Engineering', 8),
(2, 0, 'Human Resources', NULL),
(4, 0, 'Corporate Strategy', 6),
(10, 0, 'Finance Operations', 10),
(11, 0, 'Administrator', NULL),
(12, 0, 'Business Development', NULL),
(13, 0, 'Business Operations', NULL),
(14, 0, 'Compliance', NULL),
(15, 0, 'Corporate Branding', NULL),
(17, 0, 'Customer Success', NULL),
(18, 0, 'Employee Services', NULL),
(19, 0, 'Talent Acquisition', NULL),
(20, 0, 'Implementation', NULL),
(21, 0, 'Vice President, Local Market', NULL),
(22, 0, 'Information & Security', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `department_employees`
--

CREATE TABLE `department_employees` (
  `dept_emp_id` int(255) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department_employees`
--

INSERT INTO `department_employees` (`dept_emp_id`, `dept_id`, `emp_id`, `from_date`, `to_date`) VALUES
(1, 1, 1, '2023-09-01', NULL),
(3, 10, 10, '2023-10-01', NULL),
(5, 4, 6, '2023-10-02', NULL),
(6, 1, 3, '2023-10-02', NULL),
(7, 1, 4, '2023-09-01', NULL),
(8, 4, 5, '2023-01-21', NULL),
(9, 2, 7, '2021-02-26', NULL),
(10, 1, 8, '2023-11-14', NULL),
(11, 4, 9, '2023-12-05', NULL),
(13, 2, 2, '2023-12-07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `department_manager`
--

CREATE TABLE `department_manager` (
  `approver_id` int(255) NOT NULL,
  `emp_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department_manager`
--

INSERT INTO `department_manager` (`approver_id`, `emp_id`) VALUES
(4, 3),
(1, 8),
(6, 10);

-- --------------------------------------------------------

--
-- Table structure for table `dept`
--

CREATE TABLE `dept` (
  `dept_id` int(11) NOT NULL,
  `div_id` int(11) DEFAULT NULL,
  `manager_id` int(11) DEFAULT NULL,
  `dept_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dept`
--

INSERT INTO `dept` (`dept_id`, `div_id`, `manager_id`, `dept_name`) VALUES
(1, 1, NULL, 'Not Applicable'),
(2, 4, NULL, 'Administrator'),
(3, 3, NULL, 'Business Development'),
(4, 2, NULL, 'Business Operations'),
(5, 2, NULL, 'Compliance'),
(6, 3, NULL, 'Corporate Branding'),
(7, 2, NULL, 'Corporate Branding'),
(8, 3, NULL, 'Corporate Strategy'),
(9, 1, NULL, 'Customer Success'),
(10, 4, NULL, 'Employee Services'),
(11, 5, NULL, 'Engineering'),
(12, 2, NULL, 'Finance Operations'),
(13, 1, NULL, 'Finance Operations'),
(14, 1, NULL, 'Implementation'),
(15, 3, 8, 'Information & Security'),
(16, 4, NULL, 'Talent Acquisition'),
(17, 1, NULL, 'Vice President, Local Market');

-- --------------------------------------------------------

--
-- Table structure for table `division`
--

CREATE TABLE `division` (
  `div_id` int(11) NOT NULL,
  `div_name` varchar(255) NOT NULL,
  `div_start_from` date DEFAULT NULL,
  `div_start_to` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `division`
--

INSERT INTO `division` (`div_id`, `div_name`, `div_start_from`, `div_start_to`) VALUES
(1, 'Executive', NULL, NULL),
(2, 'Operations', NULL, NULL),
(3, 'Corporate Strategy', NULL, NULL),
(4, 'Culture & People', NULL, NULL),
(5, 'Venture Studio', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `emp`
--

CREATE TABLE `emp` (
  `emp_id` int(255) NOT NULL,
  `f_name` varchar(100) NOT NULL,
  `m_name` varchar(100) NOT NULL,
  `s_name` varchar(100) NOT NULL,
  `emp_num` varchar(100) DEFAULT NULL,
  `work_email` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `emp_role` int(1) NOT NULL,
  `emp_pic` varchar(1000) DEFAULT NULL,
  `personal_email` varchar(100) NOT NULL,
  `contact_num` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `p_address` varchar(255) NOT NULL,
  `c_address` varchar(255) NOT NULL,
  `date_hired` date NOT NULL,
  `date_regularization` date DEFAULT NULL,
  `date_separated` date DEFAULT NULL,
  `emp_status` varchar(40) NOT NULL,
  `sex` varchar(6) NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `civil_status` varchar(20) DEFAULT NULL,
  `emergency_contact_name` varchar(100) DEFAULT NULL,
  `emergency_contact_num` varchar(22) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `emp`
--

INSERT INTO `emp` (`emp_id`, `f_name`, `m_name`, `s_name`, `emp_num`, `work_email`, `password`, `emp_role`, `emp_pic`, `personal_email`, `contact_num`, `dob`, `p_address`, `c_address`, `date_hired`, `date_regularization`, `date_separated`, `emp_status`, `sex`, `gender`, `civil_status`, `emergency_contact_name`, `emergency_contact_num`) VALUES
(1, 'Matt Wilfred', 'Cabunoc', 'Salvador', 'OCCI-0297', 'matt@fullsuite.ph', 'mattmatt', 1, '../photos/matt.png', 'smattwilfred01@gmail.com', '09667528054', '1997-06-01', 'Cabanatuan City, Nueva Ecija', 'Marcos Highway', '2023-09-01', '2024-02-29', NULL, 'PROBATIONARY', 'Male', NULL, NULL, NULL, NULL),
(2, 'July Anne Rhaemonette', 'Almoite', 'Rosal', 'OCCI-0306', 'july@fullsuite.ph', 'rhaerhae', 0, '../photos/july.png', 'jarhaemonette@gmail.com', '09457552819', '2000-07-14', 'Amagbagan, Pozorrubio, Pangasinan', 'Engineer\'s Hill, Baguio City', '2023-10-02', '2024-04-02', NULL, 'PROBATIONARY', 'Female', '', 'Single', NULL, NULL),
(3, 'Antoinette', 'Garcia', 'Sanchez', 'OCCI-0309', 'antoinette@fullsuite.ph', 'tonton', 3, '../photos/antoinette.png', 'antoinette.g.sanchez@gmail.com', '09458239638', '2000-05-22', '62 Scout Barrio, Baguio City', '62 Scout Barrio, Baguio City', '2023-10-02', '2024-04-02', NULL, 'PROBATIONARY', 'Female', NULL, 'Single', 'Andrea Mae G. Sanchez', '09173456781'),
(4, 'Marco', 'Eliseo', 'Antero', 'OCCI-0298', 'marco@fullsuite.ph', 'marco@fullsuite.ph', 2, '../photos/marco.png', 'marco.e.antero@gmail.com', '09089624586', '2001-02-02', 'Brookspoint Rd., Baguio City', 'Brookspoint Rd., Baguio City', '2023-09-01', '2024-02-29', NULL, 'REGULAR', 'Male', NULL, 'Single', 'Issa Antero', '09184960347'),
(5, 'Hailie Joy', 'Tolentino', 'Bejerano', 'TEE-0026', 'hailie@fullsuite.ph', 'joyjoy0409', 2, '../photos/hailie.png', 'hailiebejerano@gmail.com', '09661786217', '2004-04-09', '119 B. Pinewood Street, Crystal Cave, Baguio City', '119 B. Pinewood Street, Crystal Cave, Baguio City', '2021-06-16', '2023-11-23', NULL, 'PARTTIME', 'Female', NULL, 'Single', 'Maria Cristina Bejerano', '09302930186'),
(6, 'Amiel Jethro', 'Cabalquinto', 'Cortez', 'OCCI-0307', 'amiel@fullsuite.ph', 'pagmamahal', 2, '../photos/amiel.png', 'amieljethrocortez@gmail.com', '09235974089', '1999-08-30', 'Holy Ghost Extension', 'Holy Ghost Extension', '2023-10-02', '2023-04-02', NULL, 'PROBATIONARY', 'Male', 'Male', 'Single', 'Christine Cortez', '09223440168'),
(7, 'Diana Nicole', 'De paz', 'Perez', 'OCCI-0192', 'diana@fullsuite.ph', 'staff@password', 1, '', 'diananicole.perez@gmail.com', '09774079280', '2002-09-24', 'blk 2 lot 6, lauan st villa pozorrubio', '47 Paredes St. Middle Quezon Hill', '2021-09-23', NULL, NULL, 'REGULAR', 'Female', NULL, 'Single', 'Brigette Perez', '09162614305'),
(8, 'Jhexer', 'Tiongson', 'Chun', 'OCCI-0278', 'jhex@fullsuite.ph', 'jhexjhex', 3, '../photos/jhex.png', 'jhexchun@gmail.com', '09302506992', '1997-06-28', '161-A Lower Pias St. Camp 7, Baguio City, Benguet 2600', '161-A Lower Pias St. Camp 7, Baguio City, Benguet 2600', '2023-05-03', '2023-10-30', NULL, 'REGULAR', 'Male', 'Male', 'Single', 'Juvelyn Chun', '09476002222'),
(9, 'Alleza Czarina', 'Nonato', 'Castor', 'OCCI-0273', 'alleza@fullsuite.ph', 'zaza', 2, '', 'allezaczarina@gmail.com', '09154353116', '2023-04-09', 'Quezon Hill, Baguio City', 'Quezon Hill, Baguio City', '2023-04-03', '2023-10-03', NULL, 'REGULAR', 'Female', NULL, NULL, NULL, NULL),
(10, 'Jessica', 'Abarquez', 'Aguirre', NULL, 'ajessica@fullsuite.ph', 'jessjess', 3, '', 'jeszicawongaguirre@gmail.com', '09386339392', '1993-10-05', '39 Military Cutoff Baguio City', '39 Military Cutoff Baguio City', '2022-07-18', '2023-01-18', NULL, 'REGULAR', 'Female', NULL, NULL, NULL, NULL),
(81, 'Marvin', 'Directo', 'Bautista', 'OCCI-0700', 'marvin@fullsuite.ph', 'OCCI-0700', 2, NULL, 'mrvn@gmail.com', '57468', '2023-12-07', 'Umingan, Pangasinan', 'Phil-Am, Baguio City, Benguet', '2023-12-14', '2023-12-15', NULL, 'Probationary', 'Male', 'Cis', 'Single', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `emp_designation`
--

CREATE TABLE `emp_designation` (
  `emp_id` int(255) NOT NULL,
  `company_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `position_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `emp_designation`
--

INSERT INTO `emp_designation` (`emp_id`, `company_id`, `client_id`, `position_id`) VALUES
(9, 1, 4, 18),
(6, 1, 1, 16),
(3, 1, 1, 33),
(7, 1, 1, 7),
(5, 1, 1, 13),
(8, 1, 1, 15),
(2, 1, 1, 14),
(4, 1, 1, 33),
(81, 1, 1, 33),
(1, 1, 1, 33);

-- --------------------------------------------------------

--
-- Table structure for table `emp_details`
--

CREATE TABLE `emp_details` (
  `emp_details_id` int(255) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `sss_num` varchar(10) DEFAULT NULL,
  `phic_num` varchar(12) DEFAULT NULL,
  `hdmc_num` varchar(12) DEFAULT NULL,
  `tin_num` varchar(12) DEFAULT NULL,
  `bank_acc` varchar(20) DEFAULT NULL,
  `created_by` int(100) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` int(100) DEFAULT NULL,
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `sss_contribution` decimal(6,0) NOT NULL,
  `phic_contribution` decimal(6,0) NOT NULL,
  `hdmc_contribution` decimal(6,0) NOT NULL,
  `tin_contribution` decimal(6,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `emp_salary`
--

CREATE TABLE `emp_salary` (
  `emp_salary_id` int(100) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `emp_rate` enum('MONTHLY','BIMONTHLY') NOT NULL,
  `basic_salary` decimal(16,2) NOT NULL,
  `night_diff` decimal(16,2) DEFAULT NULL,
  `allowance_diff` decimal(16,2) DEFAULT NULL,
  `bonus` decimal(16,2) DEFAULT NULL,
  `created_by` int(100) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` int(100) DEFAULT NULL,
  `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `holiday`
--

CREATE TABLE `holiday` (
  `h_id` int(11) NOT NULL,
  `h_name` varchar(255) NOT NULL,
  `h_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `holiday`
--

INSERT INTO `holiday` (`h_id`, `h_name`, `h_date`) VALUES
(1, 'New Year\'s Day', '2024-01-01'),
(2, 'Maundy Thursday', '2024-03-28'),
(3, 'Good Friday', '2024-03-29'),
(4, 'Araw ng Kagitingan', '2024-04-09'),
(5, 'Labor Day', '2024-05-01');

-- --------------------------------------------------------

--
-- Table structure for table `leaves`
--

CREATE TABLE `leaves` (
  `leave_id` int(11) NOT NULL,
  `requester_id` int(255) NOT NULL,
  `leave_type` varchar(100) NOT NULL,
  `leave_reason` varchar(255) NOT NULL,
  `leave_from` date NOT NULL,
  `leave_to` date NOT NULL,
  `leave_status` int(11) NOT NULL,
  `approver_id` int(255) NOT NULL,
  `date_filed` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `is_paid` tinyint(1) DEFAULT NULL,
  `use_pto_points` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leaves`
--

INSERT INTO `leaves` (`leave_id`, `requester_id`, `leave_type`, `leave_reason`, `leave_from`, `leave_to`, `leave_status`, `approver_id`, `date_filed`, `is_paid`, `use_pto_points`) VALUES
(1, 1, 'Vacation Leave', 'Going to Singapore', '2023-11-01', '2023-11-04', 1, 8, '2023-11-30 16:00:00', NULL, NULL),
(2, 4, 'Sick Leave', 'I\'m Sick', '2023-11-08', '2023-11-10', 1, 3, '2023-11-29 16:00:00', NULL, NULL),
(3, 3, 'Sick Leave', 'I have the flu', '2023-11-09', '2023-11-15', 1, 8, '2023-11-15 16:00:00', NULL, NULL),
(20, 4, 'Study Leave', 'Study leave', '2023-11-30', '2023-12-01', 2, 10, '2023-11-14 05:59:22', NULL, NULL),
(23, 4, 'Vacation Leave', 'asda', '2023-12-02', '2023-12-09', 2, 8, '2023-11-30 16:00:00', NULL, NULL),
(24, 4, 'Sick Leave', 'asd', '2023-12-16', '2023-12-23', 2, 8, '2023-12-01 05:55:48', NULL, NULL),
(30, 4, 'Sick Leave', 'asd', '2023-12-07', '2023-12-08', 1, 8, '2023-12-01 09:16:50', NULL, 2),
(50, 4, 'Bereavement Leave', 'asd', '2023-12-13', '2023-12-21', 2, 8, '2023-12-04 08:42:35', NULL, 0),
(53, 4, 'Bereavement Leave', 'asd', '2023-12-13', '2023-12-21', 2, 8, '2023-12-04 08:42:37', NULL, 0),
(67, 4, 'Emergency Leave', 'qweqwe', '2023-12-08', '2023-12-08', 2, 8, '2023-12-06 05:19:30', NULL, 0),
(68, 4, 'Vacation Leave', 'ad', '2023-12-07', '2023-12-07', 2, 8, '2023-12-06 05:39:29', NULL, 0),
(69, 4, 'Study Leave', 'asdasfeyhy', '2023-12-12', '2023-12-12', 0, 3, '2023-12-06 06:00:24', NULL, 0),
(70, 4, 'Other/Special Leave', 'dgdrt', '2023-12-14', '2023-12-14', 2, 10, '2023-12-06 06:00:46', NULL, 0),
(71, 4, 'Emergency Leave', 'qwreeqw', '2023-12-13', '2023-12-13', 2, 10, '2023-12-06 06:08:25', NULL, 1),
(72, 4, 'Vacation Leave', 'qewrqr', '2023-12-07', '2023-12-07', 0, 10, '2023-12-06 06:46:44', NULL, 0),
(73, 4, 'Bereavement Leave', 'asf', '2023-12-07', '2023-12-07', 0, 3, '2023-12-06 06:49:30', NULL, 0),
(74, 4, 'Vacation Leave', 'qwe', '2023-12-13', '2023-12-13', 0, 10, '2023-12-06 06:51:57', NULL, 0),
(75, 4, 'Bereavement Leave', 'wr', '2023-12-08', '2023-12-08', 2, 8, '2023-12-06 06:53:27', NULL, 0),
(76, 4, 'Vacation Leave', 'ewrwet', '2023-12-12', '2023-12-12', 0, 10, '2023-12-06 06:54:58', NULL, 0),
(77, 4, 'Sick Leave', 'dfsf', '2023-12-07', '2023-12-07', 0, 10, '2023-12-06 06:58:03', NULL, 0),
(78, 4, 'Vacation Leave', 'sdfsfsd', '2023-12-07', '2023-12-07', 0, 10, '2023-12-06 07:09:57', NULL, 0),
(79, 4, 'Sick Leave', 'qweqwe', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:08:33', NULL, 0),
(80, 4, 'Bereavement Leave', 'qweqwe', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:08:48', NULL, 0),
(81, 4, 'Study Leave', 'werwerwerwerwe', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:20:55', NULL, 0),
(82, 4, 'Emergency Leave', 'qwe', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:45:22', NULL, 0),
(83, 4, 'Sick Leave', 'gfer', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:47:02', NULL, 0),
(84, 4, 'Sick Leave', 'asdasdHel', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:48:56', NULL, 0),
(85, 4, 'Bereavement Leave', 'asd', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:50:38', NULL, 0),
(86, 4, 'Sick Leave', 'asd', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 08:51:36', NULL, 0),
(87, 4, 'Bereavement Leave', 'asdasd', '2023-12-07', '2023-12-08', 2, 8, '2023-12-07 08:52:50', NULL, 0),
(88, 4, 'Vacation Leave', 'Punta ako ng Subic', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 09:00:42', NULL, 0),
(89, 9, 'Vacation Leave', 'Punta ako ng Olongapo', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 09:01:25', NULL, 0),
(90, 4, 'Sick Leave', 'asdasd', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 09:59:20', NULL, 0),
(91, 4, 'Bereavement Leave', 'sdfsdfs', '2023-12-07', '2023-12-07', 2, 8, '2023-12-07 09:59:58', NULL, 0),
(92, 4, 'Bereavement Leave', 'est', '2023-12-12', '2023-12-12', 2, 8, '2023-12-11 02:20:50', NULL, 0),
(93, 4, 'Vacation Leave', 'XZcSZc', '2023-12-11', '2023-12-13', 0, 3, '2023-12-11 02:21:26', NULL, 0),
(94, 4, 'Sick Leave', 'hello', '2023-12-12', '2023-12-12', 2, 8, '2023-12-11 02:22:57', NULL, 0),
(95, 4, 'Vacation Leave', 'long vacation kineme', '2023-12-25', '2024-01-06', 2, 8, '2023-12-14 08:30:40', NULL, 0),
(96, 4, 'Vacation Leave', 'EEFEFEF', '2023-12-15', '2023-12-15', 2, 8, '2023-12-15 02:55:57', NULL, 0),
(97, 8, 'Maternity or Paternity Leave', 'YRTRT', '2023-12-15', '2023-12-30', 0, 10, '2023-12-15 02:56:52', NULL, 0),
(98, 4, 'Bereavement Leave', 'wdwd', '2023-12-16', '2023-12-29', 2, 8, '2023-12-15 03:11:27', NULL, 0),
(99, 4, 'Bereavement Leave', '', '2023-12-19', '2023-12-20', 2, 8, '2023-12-18 02:21:28', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `leave_credits`
--

CREATE TABLE `leave_credits` (
  `leave_credits_id` int(100) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `leave_balance` decimal(18,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `leave_credits`
--

INSERT INTO `leave_credits` (`leave_credits_id`, `emp_id`, `leave_balance`) VALUES
(6, 8, '0.83'),
(8, 4, '55.00'),
(12, 3, '0.00'),
(15, 10, '1.00'),
(16, 5, '16.00'),
(18, 1, '5.00'),
(19, 2, '5.00'),
(20, 6, '3.45'),
(21, 7, '0.85'),
(22, 9, '0.56'),
(47, 81, '0.00');

-- --------------------------------------------------------

--
-- Table structure for table `offset`
--

CREATE TABLE `offset` (
  `offset_id` int(11) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `offset_start` datetime NOT NULL,
  `offset_end` datetime NOT NULL,
  `offset_status` varchar(100) NOT NULL,
  `offset_reason` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `payroll`
--

CREATE TABLE `payroll` (
  `payroll_id` int(100) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `deductions_id` int(100) NOT NULL,
  `date_of_payout` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `position`
--

CREATE TABLE `position` (
  `position_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `position_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `position`
--

INSERT INTO `position` (`position_id`, `dept_id`, `position_name`) VALUES
(1, 1, 'Chief Executive Officer'),
(2, 13, 'Chief Finance Officer'),
(3, 14, 'Chief Implementation Officer'),
(4, 9, 'Chief Customer Officer'),
(5, 17, 'Vice President, Local Market'),
(6, 13, 'Vice President, Finance Operations'),
(7, 16, 'Talent Aquisition Associate'),
(8, 16, 'Talent Acquisition Analyst'),
(9, 10, 'Employee Services Associate'),
(10, 2, 'Executive Driver'),
(11, 8, 'Business Development Associate'),
(12, 3, 'Business Operations Analyst'),
(13, 6, 'Corporate Branding Associate'),
(14, 15, 'InfoSec & Technology Associate'),
(15, 15, 'InfoSec Associate Manager'),
(16, 3, 'Business Analyst Associate'),
(17, 4, 'Business Operations Analyst'),
(18, 4, 'Business Operations Associate'),
(19, 4, 'Business Operations Specialist'),
(20, 4, 'Data Operations Analyst'),
(21, 4, 'Data Operations Associate'),
(22, 4, 'Data Operations Associate Manager'),
(23, 4, 'Data Operations Lead'),
(24, 4, 'Data Operations Specialist'),
(25, 12, 'Finance Operations Analyst'),
(26, 12, 'Finance Operations Associate'),
(27, 12, 'Finance Operations Associate Manager'),
(28, 12, 'Finance Operations Manager'),
(29, 12, 'Finance Operations Specialist'),
(30, 12, 'Finance Operations Team Lead'),
(31, 12, 'Management Accountant Scholar'),
(32, 12, 'Payroll Specialist'),
(33, 11, 'Software Engineer');

-- --------------------------------------------------------

--
-- Table structure for table `title`
--

CREATE TABLE `title` (
  `title_id` int(100) NOT NULL,
  `title` varchar(255) NOT NULL,
  `emp_id` int(255) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `title`
--

INSERT INTO `title` (`title_id`, `title`, `emp_id`, `from_date`, `to_date`) VALUES
(1, 'IT and Security Officer Associate', 2, '2023-10-02', NULL),
(2, 'Software Engineer', 1, '2023-09-01', NULL),
(3, 'Software Engineer', 3, '2023-10-02', NULL),
(4, 'Software Engineer', 4, '2023-09-01', NULL),
(5, 'Human Resource Associate', 5, '2022-08-16', NULL),
(6, 'Business Development Associate', 6, '2023-10-02', NULL),
(7, 'Human Resources Associate', 7, '2021-06-22', NULL),
(8, 'Information & Security Officer', 8, '2023-12-06', NULL),
(10, 'Management Accountant Associate', 9, '2023-12-01', NULL),
(11, 'Cluster Lead', 10, '2023-12-01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(100) NOT NULL,
  `work_email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `temporary_code` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `work_email`, `password`, `temporary_code`) VALUES
(1, 'matt@fullsuite.ph', 'tch0tchkes', NULL),
(2, 'july@fullsuite.ph', 'rhaerhae', NULL),
(3, 'jhex@fullsuite.ph', 'jhexjhex', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Matt', 'smattwilfred@gmail.com', NULL, 'tchotchkes', NULL, NULL, NULL),
(2, 'Dr. Sadye Gusikowski II', 'wilderman.louisa@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '8RbugNTaF4', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(3, 'Adrain Douglas', 'scarlett.hermiston@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'XKi6j12WNW', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(4, 'Rowena Douglas', 'demarcus.grady@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'oBHyC7nd8b', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(5, 'Chanelle Pagac', 'schultz.kaylie@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'xGDJShGpsF', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(6, 'Rylan Towne', 'kertzmann.viva@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rml58dliej', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(7, 'Mrs. Katelynn Fadel', 'mclaughlin.jermaine@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'w6khyuMdyY', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(8, 'Virginie Bartoletti', 'kdooley@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'xqAf39JyFd', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(9, 'Clair Lakin', 'orippin@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'pEdRWHPnj0', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(10, 'Omari Reilly', 'okey.lehner@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '9BMcahF5FC', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(11, 'Camron Harris', 'else.larson@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'IUoJsMnvuT', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(12, 'Prof. Raymond McDermott MD', 'kallie48@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'zI58YrmLu1', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(13, 'Prof. Zetta Maggio', 'beryl.gutkowski@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'vEdMvQ3llo', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(14, 'Prof. Aglae Kuhlman', 'pblock@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'yofUg9yrF8', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(15, 'Mr. Antwon Brown V', 'maya.armstrong@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1zRsq9D8Zb', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(16, 'Breana Swaniawski', 'delilah96@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'qfxUs6snid', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(17, 'Ofelia Corkery', 'leslie18@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'YxPfvv2Xe2', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(18, 'Matt Kunde', 'moore.julian@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'T73qt9GTgs', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(19, 'Dr. Deangelo Monahan PhD', 'hilma86@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'BT5Xe23wtc', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(20, 'Vern Eichmann', 'brekke.brycen@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'yKg403WbvY', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(21, 'Shemar Wisozk', 'haley.yesenia@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'fEXMfSzpAK', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(22, 'Mrs. Kaylee Schmitt IV', 'jasper.roberts@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rqjjoP5QN7', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(23, 'Christina Bruen', 'sanford.bernardo@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '0zDaT1LjJi', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(24, 'Dr. Clifford Oberbrunner DDS', 'annabell03@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'xgjS7x7lrX', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(25, 'Kayden Hane', 'verner95@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Ip5A7MAduP', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(26, 'Jamir Gislason', 'willa45@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'eaFDj5ubFW', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(27, 'Raheem Bednar', 'cormier.misty@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'rbTMnv0aah', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(28, 'Dr. Leopoldo Schimmel', 'denesik.dillan@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'WZrucS9gyw', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(29, 'Jadyn O\'Keefe', 'xleuschke@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'uCVqFRKZIo', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(30, 'Dee Towne', 'jmraz@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'OHJYHv9K43', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(31, 'Marc Prosacco Jr.', 'ffadel@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'vkWit7grSt', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(32, 'Judson Price Sr.', 'virginie.purdy@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'cOthCaKnmW', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(33, 'Mustafa Murray III', 'jazlyn72@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'X2XBxYS3mJ', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(34, 'Rebeka Abshire', 'ncassin@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Du4975Iltn', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(35, 'Marcelo Torphy', 'guy50@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'l1fUmyPYSx', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(36, 'Eloisa Davis MD', 'volkman.dorthy@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'fIlCcf050L', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(37, 'Earnestine Harvey', 'oconnell.king@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'kyWv8xO5Mw', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(38, 'Aiden Konopelski MD', 'jordi.lakin@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ZsipL1bANW', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(39, 'Newton Herzog PhD', 'ward.makenna@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'OGUXPxVU5Z', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(40, 'Olen Champlin', 'margarita85@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'QzSXDWwAa7', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(41, 'Elinore Marks', 'jconn@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'jvaAbhSxaX', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(42, 'Kade Douglas Sr.', 'roxanne.langosh@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'nbs3Yvbzcs', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(43, 'Mr. Orin Shanahan I', 'annabelle.feest@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '6j5EUbCNum', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(44, 'Dr. Anibal Upton V', 'caterina87@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'RJuJnUqIcb', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(45, 'Letha Blanda', 'klein.enos@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'kOxL78iyWA', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(46, 'Penelope Farrell', 'kari55@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'PI85aqzzCj', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(47, 'Mireille Beier', 'mae.harber@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'fx2WVPhyWV', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(48, 'Jeff Mayert PhD', 'rath.elfrieda@example.net', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '7WvWj4YTVh', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(49, 'Mr. Elwyn Mitchell MD', 'maxine.jones@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'qBU80NHCqv', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(50, 'Marge Wisoky', 'qjones@example.org', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'N73htZGG0x', '2023-10-17 18:58:14', '2023-10-17 18:58:14'),
(51, 'Dr. Ron Muller I', 'vlangworth@example.com', '2023-10-17 18:58:14', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ZKczcRaTcP', '2023-10-17 18:58:14', '2023-10-17 18:58:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcements`
--
ALTER TABLE `announcements`
  ADD PRIMARY KEY (`ann_id`),
  ADD KEY `emp_id` (`emp_id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`),
  ADD KEY `manager_id_fk` (`manager_id`);

--
-- Indexes for table `department_employees`
--
ALTER TABLE `department_employees`
  ADD PRIMARY KEY (`dept_emp_id`),
  ADD KEY `dept_emp_dept_id` (`dept_id`),
  ADD KEY `dept_emp_emp_id` (`emp_id`);

--
-- Indexes for table `department_manager`
--
ALTER TABLE `department_manager`
  ADD PRIMARY KEY (`approver_id`),
  ADD KEY `approver_emp_id` (`emp_id`);

--
-- Indexes for table `dept`
--
ALTER TABLE `dept`
  ADD PRIMARY KEY (`dept_id`),
  ADD KEY `div_id_fk` (`div_id`),
  ADD KEY `manager_id_fk` (`manager_id`);

--
-- Indexes for table `division`
--
ALTER TABLE `division`
  ADD PRIMARY KEY (`div_id`);

--
-- Indexes for table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`emp_id`);

--
-- Indexes for table `emp_designation`
--
ALTER TABLE `emp_designation`
  ADD KEY `company_id_fk` (`company_id`),
  ADD KEY `position_id_fk` (`position_id`),
  ADD KEY `client_id_fk` (`client_id`),
  ADD KEY `emp_id_fk` (`emp_id`);

--
-- Indexes for table `emp_details`
--
ALTER TABLE `emp_details`
  ADD PRIMARY KEY (`emp_details_id`),
  ADD KEY `emp_details-fk` (`emp_id`);

--
-- Indexes for table `emp_salary`
--
ALTER TABLE `emp_salary`
  ADD PRIMARY KEY (`emp_salary_id`),
  ADD KEY `emp_salary_fk` (`emp_id`);

--
-- Indexes for table `holiday`
--
ALTER TABLE `holiday`
  ADD PRIMARY KEY (`h_id`);

--
-- Indexes for table `leaves`
--
ALTER TABLE `leaves`
  ADD PRIMARY KEY (`leave_id`),
  ADD KEY `leave_emp_id` (`requester_id`),
  ADD KEY `leave_approver_id` (`approver_id`);

--
-- Indexes for table `leave_credits`
--
ALTER TABLE `leave_credits`
  ADD PRIMARY KEY (`leave_credits_id`),
  ADD KEY `emp_leave_id` (`emp_id`);

--
-- Indexes for table `offset`
--
ALTER TABLE `offset`
  ADD PRIMARY KEY (`offset_id`),
  ADD KEY `offset_emp_id` (`emp_id`);

--
-- Indexes for table `position`
--
ALTER TABLE `position`
  ADD PRIMARY KEY (`position_id`),
  ADD KEY `dept_id_fk` (`dept_id`);

--
-- Indexes for table `title`
--
ALTER TABLE `title`
  ADD PRIMARY KEY (`title_id`),
  ADD KEY `title_emp_id` (`emp_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcements`
--
ALTER TABLE `announcements`
  MODIFY `ann_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `department_employees`
--
ALTER TABLE `department_employees`
  MODIFY `dept_emp_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `department_manager`
--
ALTER TABLE `department_manager`
  MODIFY `approver_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `dept`
--
ALTER TABLE `dept`
  MODIFY `dept_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `division`
--
ALTER TABLE `division`
  MODIFY `div_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `emp`
--
ALTER TABLE `emp`
  MODIFY `emp_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `emp_details`
--
ALTER TABLE `emp_details`
  MODIFY `emp_details_id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `emp_salary`
--
ALTER TABLE `emp_salary`
  MODIFY `emp_salary_id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `holiday`
--
ALTER TABLE `holiday`
  MODIFY `h_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `leaves`
--
ALTER TABLE `leaves`
  MODIFY `leave_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `leave_credits`
--
ALTER TABLE `leave_credits`
  MODIFY `leave_credits_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `offset`
--
ALTER TABLE `offset`
  MODIFY `offset_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `position`
--
ALTER TABLE `position`
  MODIFY `position_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `title`
--
ALTER TABLE `title`
  MODIFY `title_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `department_employees`
--
ALTER TABLE `department_employees`
  ADD CONSTRAINT `dept_emp_dept_id` FOREIGN KEY (`dept_id`) REFERENCES `department` (`dept_id`) ON UPDATE CASCADE;

--
-- Constraints for table `dept`
--
ALTER TABLE `dept`
  ADD CONSTRAINT `div_id_fk` FOREIGN KEY (`div_id`) REFERENCES `division` (`div_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `manager_id_fk` FOREIGN KEY (`manager_id`) REFERENCES `emp` (`emp_id`) ON UPDATE CASCADE;

--
-- Constraints for table `emp_designation`
--
ALTER TABLE `emp_designation`
  ADD CONSTRAINT `client_id_fk` FOREIGN KEY (`client_id`) REFERENCES `client` (`client_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `company_id_fk` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `emp_id_fk` FOREIGN KEY (`emp_id`) REFERENCES `emp` (`emp_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `position_id_fk` FOREIGN KEY (`position_id`) REFERENCES `position` (`position_id`) ON UPDATE CASCADE;

--
-- Constraints for table `position`
--
ALTER TABLE `position`
  ADD CONSTRAINT `dept_id_fk` FOREIGN KEY (`dept_id`) REFERENCES `dept` (`dept_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
