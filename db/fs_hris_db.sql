-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 25, 2023 at 06:03 AM
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
  `emp_id` int(100) NOT NULL,
  `ann_title` varchar(255) NOT NULL,
  `ann_content` varchar(500) NOT NULL,
  `ann_category` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `announcements`
--

INSERT INTO `announcements` (`ann_id`, `emp_id`, `ann_title`, `ann_content`, `ann_category`) VALUES
(1, 2, 'Year End Party Announcement', 'Come and join us for our year end party on December 16, 2023', 'Urgent'),
(2, 2, 'Christmas Party Announcement', 'Christmas Party, please wear festive costumes.', 'Urgent');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `company_id` int(100) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `company_loc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`company_id`, `company_name`, `company_loc`) VALUES
(1, 'FullSuite', 'Baguio City'),
(2, 'TeeTalkPH', 'Baguio City');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `dept_id` int(100) NOT NULL,
  `company_id` int(100) NOT NULL,
  `dept_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `created_by` int(100) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` int(100) DEFAULT NULL,
  `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `emp`
--

CREATE TABLE `emp` (
  `emp_id` int(255) NOT NULL,
  `work_email` varchar(100) NOT NULL,
  `password` varchar(500) NOT NULL,
  `f_name` varchar(100) NOT NULL,
  `m_name` varchar(30) NOT NULL,
  `s_name` varchar(30) NOT NULL,
  `emp_role` int(1) NOT NULL,
  `personal_email` varchar(100) NOT NULL,
  `emp_photo` blob,
  `contact_num` varchar(22) NOT NULL,
  `dob` date NOT NULL,
  `p_address` varchar(255) NOT NULL,
  `c_address` varchar(255) NOT NULL,
  `date_hired` date NOT NULL,
  `date_separated` date DEFAULT NULL,
  `sex` varchar(6) NOT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `civil_status` varchar(20) DEFAULT NULL,
  `emergency_contact_name` varchar(100) DEFAULT NULL,
  `emergency_contact_num` varchar(22) DEFAULT NULL,
  `created_by` int(100) DEFAULT NULL,
  `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_by` int(100) DEFAULT NULL,
  `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `emp`
--

INSERT INTO `emp` (`emp_id`, `work_email`, `password`, `f_name`, `m_name`, `s_name`, `emp_role`, `personal_email`, `emp_photo`, `contact_num`, `dob`, `p_address`, `c_address`, `date_hired`, `date_separated`, `sex`, `gender`, `civil_status`, `emergency_contact_name`, `emergency_contact_num`, `created_by`, `created_at`, `updated_by`, `updated_at`) VALUES
(1, 'matt@fullsuite.ph', 'mattmatt', 'Matt Wilfred', 'Cabunoc', 'Salvador', 1, 'smattwilfred01@gmail.com', 0x89504e470d0a1a0a0000000d49484452000001f3000001f20803000000c88dd7dc0000001974455874536f6674776172650041646f626520496d616765526561647971c9653c00000180504c5445336d82d0b293417e9a4848484684a24a8cae306a7ed1c8d144809d357085407d993f7b96b3b3b0275d718687864765734886a54a8bac3e7a954a8aab38738acfa8ce4686a53c7993fee6cf4787a74785a44584a33d7a94a18b7655555543819e3a768f498aace4d6e339748d4b8cadac67aa71706f74878436718845565d4545454a5f68fef0e3395965e2c5a545748a2e5a69fddcbcb0aa9737515a515151f1caa33b77904c4c4c3e7b96939b986d929eb79c824783a044494bd1bda35b899ba0a5a2466d7d4c839afdd2a84f879f424d524c8daf515b5fffffff467e9aa458a25357594888a840778f42809c4989a94582a04583a1417f9b40748b4482a043819d4483a14888a7407c973c78913a758d3e79934889aa3b7891427f9c42809d4889a9498aaa3a758e417e994988a843809d39748cba82b9e9e6e98e7c6cf3f3f3e6bd9e50555773685d5e5e5ffdd5ae5c5651504d4bf9f4f9f3eaf3fefcf9675f57fef8f14170845c7a7e38748e6a4e69487f9b467b94925591816e80534a530e2cdf5e00001e3b4944415478daecddeb6313c77600f031a212b13d1675e340c15ea7bab588a41819635fd72832288a6ac55ca879a55052726fd35bd960630c01737bddf65faf64f9a1c7ae761e6766ce91e77c49f20556fbcb397366667796fd33c2f89bc8f8c793f8db88f887bf0b8d3ffde9e79f7ffee31fffa533fed015fff9877f6dc6dff7c5e5767c751447ff7aad372e5e3f8d8b47f1e8347e3a8aa7edd83c89e6bfcf76c7b3a3f8f3a54b977ef9e56167bc3a89c7edb8d015bf8e76c6f3ee18eb89c9c9c9e9664c4e324f7edec8319a7b72b3e4d3cc939f37727ce69edc34393a734f6e9c1c9bb927374f8eccdc935b20c765eec96d90a332f7e456c831997b723be45798273f6fe42f99273f6fe468cc3db935722ce69edc1e3912734f6e911c87b927b7498ea26ff7e456c931987b72bbe408cc3db96572f7e69edc36b973734f6e9ddcb5b927b74feed8dc933b20776beec95d903b35f7e44ec85d9a7b7237e40ecd3db923f217cc939f377267e69edc19b92b734fee8edc91b9277748eec6dc93bb247762eec99d92bb30f7e46ec91d987b72c7e4f6cd3db96b72ebe69edc39f9bf334f7edec82d9b7b7204e476cd3d390672abe69e1c05b94d734f8e83fcf7cc939f37727be69e1c0bb935734f8e86dc96b927c7436ec9dc932322b763eec931915b31f7e4a8c86d987b725ce416cc3d393272f3e69e1c1bb971734f8e8edcb4b927c7476ed8dc932324ff9a79f2f3466ed4dc93a3243769eec971921b34f7e448c9cd997b72ace4c6cc3d395a7253e69e1c2fb921734f8e98dc8cb927c74c6ec4dc93a3263761eec971931b30f7e4c8c9ff839d1ff2c362259dce35a3963f895aeb3fd3e974b1788ec8c1cd31926f36b173e57c4cd49af8c54be7801cda1c1df961a523ad05a29c4b1f1c0e37f9bfb12126ffb1129fdd51f0c5e1258735c7447e98aee5b5a2e93e9ce4a0e678c8b5c14fdd0f878f1cd21c0bf9771518f0e3d62e5d1c3272407324e43fa6cb79e0a8158ac3440e678e83fcc742de48d45a457e48c8c1cc51909b126f8fed0743420e658e817cd3a4783bd97f1d067220730ce49572de7c140ee993c39823203face5ed44ae489dfc776c38c8d3797bd154274d0e61ee9edc5a929faa5326ff2f3604e45646f21ef543bae4fae6eec90b79175138a44aae6dee9c7cb3967713e50a51725d73d7e4c58a2bf256817f40925cd3dc297931edd0bb1d698ae47ae60ec98b85721e419ca63a21722d7367e4df556a792451ae9023d7317745fe5dba9c4714056ae41ae6aec82ba8c45bf5fd392d72757347e4c55a1e5dd41e902257367743fe5d3a8f31ca4f2891ab9abb213face5f378d1a9907fc9089157f268a3894e865ccddc09f977853ce2288f9121573277435ecba38eda181572157327e47f454ede9cb25121573077427e58cea38f34117279734f1e194f68904b9bfbb17cc0904e835cd6dc930facee24c825cdddcccb73792af18402b99cb91bf23419f27c8e02b994b95f7d8b8df931fce432e66ec8ff5aa6645ee663e8c925cc1d6d9ed6f2a4e2361fc34e2e6eee883c9d27169c8f2127173677447e488dbc99e8fc9f70938b9abb7a102a47cebc99e8fcf7a8c905cd9d3dfb468fbc95e827e838c9c5cc9d3de15a23685ee627e848c985cc9d3dc79ecee789267a0b1d2bb988b9bb5717ca24cd6bfc081d2db980b9bb179468a6793ebf7084fe2556f2787377e444d3fcb8b873fe0d52f2587387af2156f25483f7a2a3228f3377f9b2718dacf9420f3a2ef2187397e445b2e4c75ddc293a32f26f18da23050a74cd4f8a3be70c21f94073a7e49b65c2e6b74fd193f8c80799bb3d2ba64298fcacb837d1d1910f30777c3c508eb2f95971ef4547401e6deefa4428d2e4a79d7b2f3a06f24873e78780d136bfcd3bd1afa0228f32777ed45f9ab6799977c5154ce411e6ee0ff4ace587a7b89fa023210f37774fbe499cbcbbb8b7d1b190879a23388f5d6538dfdf456cceafa0210f33c7f0a10dc9e17c3f5b1aa956ab25b4037a335e60210f3147f10525a9d9f976a97a1c25b4037a33fe8284bcdf1cc777d2c4175ef76796ab67b18db7b8b7d05190f799e320df5413c7841e62ce7f8782bcd71cc90730455bb8ed1e7144e8651e868e81bcc71ccb676ec53658de8d544302cb98ce07a03b25ef3647f331ebb4629263425f0845ffc63d7997399eef978b3c2f51aa46c5c83ed601bd195f3827ef34c7432e3055db1fa946c79b8f78cdf917aec93bcc1191c79b0f24af5697117472351e85ee98fccc1c13f9e59a1e796b50dfc7d9c41da3bb243f3547457e599bbc39a87fc4d9c4b5cbbb4bf22f1846f23873017204f53dda9c275d921f9b2323bfacdab1f7a4fa3b944d5c27ba0bf2b63936f2c1e6db55d1709bea83cc8fd19d901f99a3231f68be5b950897a37a8dc7a1bb216f99e3231f64beffa62a15ee1af8328f417744de344748fe15c0607e56e067d04dd68ed1bf7643fe05c348fe1550653f5996db4669cef9d74ec807983b24ff0aacb23b555f1043b74d1e6dee923cda7ca6aa182ed4e3cd5be8d6c923cd9d92479abf5bae56d5d5f7314dd64ed0ed934799bb25ff0aac81ebe9e6dea1333f42b74b1e61ee98fc72c42390efaaba51ca6233e77fb14d1e6eee9afc72ce449a1f97f812c832cdfeeecccc4ccc68511332e75f5a260f35774e1e61feae0a1323db9a35fe63e96497a7f44edfbc13dd067998b97bf208f352152c46d4b3fdddcc1bc125fd329745b7421e628e803cdc7c7fb90a19cb2585747fb73d22f170359744b743de6f8e81fc5a4e6f3f4d6270df96c8f7dd52e8c6fdb6be791bdd12799f390af270f391aa9918296dc7bfd1babb5d8a2c33dbfae62d745be4bde638c8af853ddffeb16a32de8c9466b2bb6149bf9b9d29c53c71f9517d21eeec24396be43de648c843cd4b552bf166a415cd8958a9f54fb1e5fd1100f34e74b3e4dde658c843cddf54f1c60c80f919ba61f22e7334e461e61fab98e31d80f909ba69f24e733ce461e625d4e62508f336ba71f20e7344e461e66faaf4125dd6bc856e9efccc1c13f9b5a2b17557ab23bab4394f5a203f3547451e62be8ddcfc0d8c7913dd38f989392ef210f31272f3ea4718739e344e7e6c8e8c3cc47c19bb7909c8fc14dd1879db1c1b79bff92e76f2d0e2ae647e8c6e8efcc81c1df9b5436ac37978e7ae667e846e90bc658e8ffcda3572c379e84e8ba27913dd2479d31c23f93562b3f388015dd59cf32f0d927fc150925f24363b8fd8685137ef4407276728c9af936be19a016a7e860e4fce50925f2f03bdbee2b689d3313f413740ce50925fcf916be1aad55d58f336ba09728692bcd77c8482f936b0790bdd08394349de6b4e813c649b45d39c7f69869ca124ef31ff48c2bca4f30c64c4a16246c8194af2eb057a6d7bc8648d1b42d7246728c9afa7a9adbc1a320f45d7256728c97bcc494cd5fa27e8656e045d9b9ca124ef311fa1695ee326d0f5c9194af28b456f7ef6901c34394349de63be4cc37c57e9cc01397408728692bcc7bc7abecd3bd041c8194af28b17bd79d7863a2839c3497e91def4bcdf7c8103a30391339ce48f6a04cdb7cd991fa14391339ce4773acffea0623e03bf24d3890e46ce5092afb61e24dda5b50cd76d9e2d2d571761d1c1c81956f28e4d8b1972e6bbede7f7cca32b913384e47797bb77aac8999f3ee2f1d930ba1a39c347fe68bc677b929af9d9533d37b951744572868ffc87de56988a79a9ff41ae1b26d155c9193af247f73aeed9f23b2a4fc39d6ea6765d2dec88de8dae4cced0913fbad97b1f472899f74c32b831747572868efc51df420725f3dec7b83e9b42d72067e8c8ef74dfb437b4cc7baf75959b41d72167d8c8bb86f376a21332ef6b3717b911742d72868dbc63a67692e854cc97438e211ee126d0f5c81936f2476b7d5b1754ccab61330c6e025d8f9c6123ef371f21631ef6fa2c3782ce74c81936f2eea95abb6652312fd932e79c6990336ce43f55872b3e5b478f2567d8c8bdb9267a3c39c346eecdf5d099aab943f26133af70abe84cd5dc25f94f3787cb9c739be84cd5dc29f94f6bde5c199da99abb257feacd95d199aab963f2a7e34345bec6eda1335573d7e44fef0d95f908b7862e2a9e64d8c89fae0e95f9a269f3d3c57761f25e73f7e44fef0c95f92ab7842e4ede638e80fce90f7e4946015d82bcdb1c03f9d3cda19aa057b8157419f22e731ce49bc334595be656222943de698e847c73981af7118e093dd96b8e857cf38e6fe1cca0277bcdd1906f6efa16ce087ab2d71c11f9300de89ca3414ff69a63221fa2017d91a3414ff69aa3221fa201fd06c7829eec35c745fef4e9d0ccd02b1c097ab2d71c1bf9d06cadad718e033dd96b8e8e7c76588afb04c7819eec35c7473e3b3b24c53dc951a0277bcd3192cf0e47e7bec83906f464bf3942f2d9e1d85bfbcc31a027fbcd3192cfce0e431777937304e8c9507384e4b377fde41c063d196a8e917c7676cda739047a32d41c27f9104cd726b87bf46484394a72fa89ee30cd4fd19311e648c9c98fe837b873f4a4883922f2d9678bfe01193df4a488392af2673f905e8cab70e7e822e6b8c89f3da3dcc6ad728e179da1257f46b8baaf718e189de125fff325aad57db9c231a333c4e4977e58a669fe9973cce80c31f9a55fee9044bfc1396a748699fc978714d1119187a333d4e40f1fdea136a62fa3220f4567b8c91f3efc9e56f73e52e11c3b3a434ede8cbbe3640afce2678e2f42ccb1933f2453e12b1c67f49953207ff88a42815fe39c063a2341fe8ac23aec2a2782ce4890bffadeafc4c0a13312e4af5ee17f8462997322e88c06f92bfc27882d722ae88c06f92bfc8fcddce054d0190df257afd0cfd6929c0a3a2342fe18fb6c6d8d732ae88c08f963ecb3b5094e069d11217ffc187971af7032e88c0a39f2e2bec639197446851c79719fe09c8c3aa342fef8c24d5fda61d01919f20b8bbeb403bded4086fcc25d5fda61829121bf80b9b8274999d321bf8077cd7d91533327428eb8b8dfa0664e85fcc205ac1baacb9c98391d72b4c57d91983921f20b17903e005ba16e8e98fc02ce23c4d6387173cce448bbb81bc4cd5193ff3a8a718abe9ca46d8e9c7c74d57770d0e6d8c94747977d07076b8e9f7c14df89cf239cb23901f2d1bbbe838334a7403e3a8a6dba76931336a7413e8aed719909c2e644c84747d7fc440dc89c0c39b2e9da2a276b4e877cf4f94d3f518330a744fe1c53a22f72aae6a4c89f634af40a557362e488129d649ab7cca9913fff7ed9a7b99e3939f2e7cfeff934d73227488e26d12ba4cd49916319d189a6f9b13931f2e7777c9aeb9a5323c7614e35cd8fccc991e330af1036a747fe7cccafb46b99532447604e7143edc49c243902f3094edc9c1ab97bf39b9cb83939f231e70f4e7c266e4e8fdcbd39a76d4e90dc9beb995324f7e6fa6bafd4c8bdb9b63939f2b17bde5ccf9c1eb937d7342748eecdf5cc29927b732d7392e4de1cd49c04f9d81d6f0e674e83dc9b039a13219ff4e660e654c8bd39983919726f0e654e877cda9bc39813229fbeebcd21cc29914f4f7b7300735ae493fed1287d7362e4aecd4786c09c1ab937d73627473eedcd35cde9917b734d7382e4de5ccf9c22f9f4b237d73027493ebde6cdd5cd69927b731d739ae4de1cc49c14b93787302745fefd1dc76741aedd4dd237a7447e2755af5f756b7eb55e4fdd256e4e88fce06dbd8ec1bcbe555ba06c4e883c9db8d732ffd6bd797da27c9bae391df2835a22f11a8b7926912099ea8c14793a914864eb58cceb6f13098aa9ce08913f692679a25dda71984fb4aea746d09c0c79badcbac589141ef3f1a30b2a53abef8c0af9ef7389766ce1314f1d5fd26d8ae6f8c90f6ac7f73751c763be75724db45a3946833c7d7277136fdbe675b7e69fda17717a55e57962e6e8c94febfa69dbee7851e656bdc79c547d6704c80fca897e73a7c5fddbe38bc8765c189dfacef093a7138910f3fa2d77e47bf510733aa9ceb0933fc925c2cd3fb94ff31e732a5375869cbc524e4498bb1bd16fd523cc894cd5196af207854422d2fc3747d57defb748731af59d61263f9b948799d73fedb9adec61e6145a3986983c5d4e0c3477d3bb7790b73659fa027f7d6768c91fe41289187317e8573bfffed02b445fdf1956f24a39116f6e1fbd8b3cc21c7baa339ce411497eb6deee08bd9bbc1e7991b7919b23240f6bdec2cdeda2f79067a2af12732bc7109287ccd03ae2752ffa9e93f6ad732f9558aa3384599e1b742b8f9f99a8db9fb2edf5920f36c78bce10b66f92e69616676e7deafb8bef0dbcd01a6a7364f3f2817732315eef0f0bcbb0b77eab0f9339b635f6c1e6f742cc8d0fea7b57c3fed62c5973743b6983cd27c2eebee1fa1e52d7e3cd1378cd91ef97c72cca74d4f73d5b53b4f8e939727364e44fd2eb4b31b73202a0fee996d524afd75fc75c68909b5f406c8e635e5e29dc0f8220cefc7514ba91517def6ae45f978ab9d0a5e68fd9c92d203547405e49af07edd88fb995a94884fa6f57ad25f9e92b0d83cd8fd891a53b4340fee0205d08ce6225213f593b4bf55b6697613a6355cc1c9d3b734cfee02cbf45cd57eb0303aec00f28eb226d7b62bffb77a171670ec99be97d3fe88f38f3ec608966818751bffa5bcc5f14c899a381676ec80f2a85f520221271ed703d2e3e5d353b908bb5ed8995a85f989b770acfac930fe216323f7e4bd1a8faad6fe3ff8e94b2f971c2bb826716c95f16d331dc62e6a97addacba8878dc6a7b9cf971c6bb28f5cc0e79b35513e10e04a6e7112bee70ea62e2c7270e689a3b8167c6c98b95f0564ddd7ca25e37a77ef593e89f9e8dbd50895f7dd4dc2dd8343743feb258114d6e29f3b775e190ece1f7c4c56357db25cd2d0ef2cc0cf95831adc02db40c3770f5556b95662f767626d5c22998dba9f5cc00f958a510a8878079aa2e159f84925d7418175d79ed5e8853c87893e6c0e463e9402b5612504d5c47898f5b9c934b71b1164ecbbcc5be60cc1c98bcb81e18379fa8cbc720f5bd6f15fec0b7a6cd9b45dedc7a3b24b966928b9907759588acf0f2392eb20a07601eec983207241f2b68930702f75264254ef8a18abd4f4a7f98400b17bae08ea0be3350f2f5c08e79aaae1657c59e6705598503313782ceb0910b99afd6a1d0afaafe495981cb5c0950a2336ce44b22e6d93a10ba6a96c76fa442991b4067c8c8c5cc13cae6ddc74ded29936712b6cce11b3906d6b1c3900b9aa794cd3f0d7ae910744506ca1c1c9de199a4092fc3a9acca8456f75bea7fca84d06502dd939c31732df24a60d55c7940ff90c9bc398ee5ea2775f3b736cd837943e67aab6f50bf4e6449467e40dfca4c4d351a731b7dd1684c4d653ec8936f25ac9a070b46ccf5d6d8efdb36171ed03f34b537e2a2319531309c039aef9830d7db492b04b6cdc74575e2c1db3137b5053e9ceb2fbe1a19d21904f9011c7920763385b759de6f88c7fb0f5bb0c339a039e490ce20f6cbefdb3717dd66c948983736e63e800ee790e63bc0e69a4fc500567661f34406b6b49fb0bf871cce21cd01ab3bd32787acec824b32c203fad48664342087735073b8de9d699303adb9ca9a4f4057f6e398021cce2136d60c5477a6fdb8633a70622e3243ff30276fbeb105379cc39a83b5714c97fc41e0c83c053e981f4fdade830de7c0e63ba0e61acfb11760cdf785cdefc10fe6a2d55d743887da64016ee39826793170659e3552d95b113b25081c9903b5714cf36d15e034175d861379b3a1a1481e5bdd330957e63928731d72e83497314f19a9ec02d57ddc99394ca233bd77d2d61d9aaf9aa9ecf1d53debce1c24d19916792570689e3553d9e35766c42f3111604c74a6f5e629789a0712f773e053ee990dad98d27cb2dd98790ec65c9d1c3ecda5cc072dbfcee9990fda6c5975690e91e84ce74881825bf309230d5c6ca2679d9a03243ad3202f066ecd03330d5c4c1bb795706a0e90e84ce3e0100369be247343a3f753b5d37c401b37eed85c3fd1993ab989349733bf67a6816b474a77e1157c33f53860cde58e072a3837cf9a98a7c5adc605aecde721cde5c81f04cecd23965f41d23caa8dcb245c9bef009a4b1e02963661be2f673e6e629e3638d1ef3937d74e74a67ceedb7d04e6a1b3b5d4c686c144cfba37df81329725af0408ccc3666befe7a0cc373ea81d2962da5c77bac6540ff42c60300f9bad4d8191cfa534676aa6cc7320e6d2e445233f46668b2562b60696e68dd47bdd999a29f300c25cfed8de020ef3aca1346fa43e00ccd48c99cfeb9bcb93bfbc8fc3bc7f6f6d4a7b723ee885c5540285f98eb6b9c2e1dc663a3805f3b0d95a66aaa158e0e7e25e505d95bcbc7d43f76941d35ce53cf60216f3c8bdb54c2afc8df3e899594ae075a8b748cc737ae64a47f00758cce3de55dcca6404abbdc8eb895b0924e65a5d1c53fad0461a8db9c8ab0d1f84ca3ae4bb89e6cde721cca5beadb26eeaa748930b1d0f38a5f79084f24ccda0f90e80b9147931c0632ef2d1868cc6d6a9c6229c49739d2e8ea97c41a980c85ce845f406cc703e8ec87c5ed75cf2a359f731998bbc88be05f3def90422f31d4d7349f2830093b9d051715320c3b9fce52d05088b3b53f81a620195b9d861ee71e82223442a81c93ca7632e4bfe32c0652e74ca4806c05c6e116e65df20b8567167f2df3cad203307396544a46d7f8b855bb38b63f29fb92d203317fadcda94fe789ec1c3ad57dc9934b9c9d2ae669e02306f00ccd45696ac796b157726fd316b93a53d58da5f3153dca7f4975eb331e081ed98d73197fa7e79c1f86f596acaaf74daaf74ffa7ca9990b1ab325afb2b2b818bc869984b913f70f2f396564c1f2195d12aed4ed077d4cda5c8cd96762571a17d9686f67afb84e52325cc157726496ea1b4cb8a0bedb368efabc5efafac5029ee4c927cec3e3a71a17d16ed057791fd15db7ddc0e84793cb9e5d22ef8fe5a6c717faffdcc84d8fe8a65f5057df378f2b1b4cd9fb402b6cf22b0830eb5bfb28fbeb83339f2b1755c455d749f45c03c03b6bf622fd97774cd45c88b18c105f65952ba0fca486e9daf602eee4c8adcd2702ebf1697d5dd3f8f6bdc516d9d6bced69814b985d2beb4afb4e6bea56dde00de3ab7c29ed33117237f80aca40b17f786e6c3ceabaad7657a6cd7301723375dda95c563f759445e6b807c7fc55a1f3faf6c2e486e7a116e49fdcec66ca28b9867204eefb65de073aae6a2e4a617e174cc0717f739bd27dc57352e0cdf6c8dc9901b9fa9254c1577cde33edfa2355799ad310972f38b702ba68abbde01de3aa5ddf44c7d5ec55c9cdcfc9e9aa9e29ed17b4b7115ed70ae54dc9904b985c7250c1577b1530229967695d91a1327b7b108973053dcc5cc33044bbb4a7167e2e436f6d456cc1477b183855260af26e25e8a63e2e49316f6d496cc147731f3298043faed9befe898c7913fb1b169a053dc75cd1b40078a581dce15666b4c987cd2ca9e9a4e714f697e84690ebeb4dbd8539d57368f259fb4f2f4a399e22e78661cc5d2ae30a03361f2693b8fc8e8d451ddaf3065289676f9019d09935b19cef506f494ce325c54e38ebdb4cb0fe84c947cdad213affb268abbbd03db1d3c2b233da03351f2694b2f332c1928ee5b82e60d8aa55d7e4067a2e4d3b65e663050dc453fd03247b2b44b2fbf3251724bc3b9de6c6d42f3db5b244bbbf480ce04c927adbdc062a0b80b9fe99ea158daa5077426483e69efdd44f8e22e6c9e2259da65077426483e69ef0516f8e22e6c3e45b2b4cb0ee84c90dcda706ea2b80b7fbaa141b2b4cb0ee84c8c7cdae6fba8e0c55dd87c8e6469971dd09918f9b4cda306c0d7dcc53fd142b3b44b0ee84c8c7c7a3d2092e8afd597e1fa1b7722a55d72406762e4764f0e827e5a46f903d8444abbe480ce84c8a7ed1e2f015cdc3f889b4fc13dfc68f5c4897915f3c1e4d3568f97802eee12dfc66e803dfc68b5b4cb0de84c887cdaf26951b0c55dc27c0eecb9f67dab376c47de3c8e7cda2e39707197f99ce67b32cfb5ab0fe84c88fcc0f22f802dee32e61932cfb5ab0fe84c84dcf6700efc12938cf91491579674067426427ec5fee18f90c5bda1684ea8b44b0de84c84fce5ba7573c8375465cc1b344bbbd480ce44c89f58ff05a0c55dc67c8ec241039a033a13207fe9e22c678d1b9e555e86eb6adcdf524a7399019d0990bf4c07b4127d4bc33ca3773c989b0e4ec73c9cfc6521a095e8e392e7fb86367113a44abbcc360b13207fe9e227e8747159d565b84e738dffe9f65ddcaf0525f328f20327e660c55dcebc0150da9ddcaf7915f328f22b1527bf01acb8a7a4cce7f44b3bf62ff2b078f22be9805aa2bf555d863b6bdc03521d9cd4aa0c8b27bfb21e904bf48cba798666699768e2583cf91547bf41e775c55575f329ddd2bee4e8762d489a0f223f70651ec014f78682f96b7a692edec4b1587257c3b9de742da36cded07c106edfd5ddca49990f24bf52080826faaaf421135d8dfb04bd34176fe2582cb9b3164e2bd103c5a5d776e3fe9ada444d6a4067b1e457dcfd089de95a4ad93ca355da1ddead7961f338f20387bf42a3b84fa82dc3b59bb82cc53417378f2377d8c269257aa061be456fa226d3c4b13872972d9c56a2a754cd1b1aa5dd659a0b37712c8edcb1f99276719f92359fd328ed4b4e6f966013c7e2c85f0401d1447fad68be9122d9c1890fe82c8efcc0b1b9fa02ecb8aaf9ff124d7309f381e42f2a01d5449f505a866bc6ff114d73d1268ec590bf480764137d4bcdfc7fa8a6b96813c762c85fac0764137d5c65e97563e3bfa9a6b96813f7ff020c008ea9adf1ac1529080000000049454e44ae426082, '09667528054', '1997-06-01', 'Cabanatuan City, Nueva Ecija', 'Marcos Highway', '2023-09-01', NULL, 'Male', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'july@fullsuite.ph', 'rhaerhae', 'July Anne Rhaemonette', 'Almoite', 'Rosal', 0, 'jarhaemonette@gmail.com', NULL, '09457552819', '2000-07-14', 'Amagbagan, Pozorrubio, Pangasinan', 'Engineer\'s Hill, Baguio City', '2023-10-02', NULL, 'Female', '', 'Single', NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'antoinette@fullsuite.ph', 'tonton', 'Antoinette', 'Garcia', 'Sanchez', 2, 'antoinette.g.sanchez@gmail.com', NULL, '09458239638', '2000-05-22', '62 Scout Barrio, Baguio City', '62 Scout Barrio, Baguio City', '2023-10-02', NULL, 'Female', NULL, 'Single', 'Andrea Mae G. Sanchez', '09173456781', NULL, NULL, NULL, NULL);

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
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `emp_salary`
--

CREATE TABLE `emp_salary` (
  `emp_salary_id` int(100) NOT NULL,
  `emp_id` int(100) NOT NULL,
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
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`company_id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`dept_id`),
  ADD KEY `company_id_fk` (`company_id`);

--
-- Indexes for table `emp`
--
ALTER TABLE `emp`
  ADD PRIMARY KEY (`emp_id`);

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
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

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
  MODIFY `ann_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `company_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `dept_id` int(100) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `announcements`
--
ALTER TABLE `announcements`
  ADD CONSTRAINT `emp_id` FOREIGN KEY (`emp_id`) REFERENCES `emp` (`emp_id`) ON UPDATE CASCADE;

--
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `company_id_fk` FOREIGN KEY (`company_id`) REFERENCES `COMPANY` (`company_id`) ON UPDATE CASCADE;

--
-- Constraints for table `emp_details`
--
ALTER TABLE `emp_details`
  ADD CONSTRAINT `emp_details-fk` FOREIGN KEY (`emp_id`) REFERENCES `EMP_PROFILE` (`emp_id`) ON UPDATE CASCADE;

--
-- Constraints for table `emp_salary`
--
ALTER TABLE `emp_salary`
  ADD CONSTRAINT `emp_salary_fk` FOREIGN KEY (`emp_id`) REFERENCES `EMP_PROFILE` (`emp_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
