<?php
function curPageName() {
 return substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
}
$p = substr(curPageName(),0,-4); if (!$p) { $p = 'index'; };
$arr = array(
'index' => array('NAPCO International LLC: Sustainment of U.S. Manufactured Military Vehicles and Associated Equipment','Sustainment of U.S. Manufactured Military Vehicles and Associated Equipment, oficial holder of cadillac Gage technical data package, ISO 9001:2008'),
'about' => array('NAPCO: Sustainment of U.S. Manufactured Military Vehicles and Associated Equipment','Serving Militaries and OEM’s Worldwide for more than 60 years, Represented in 20 countries worldwide, Recipient of the US Presidents “E”- Star award for Export Excellence, '),
'services' => array('NAPCO: M4 Sherman MBT, M24 Chaffee LBT, M48 Patton MBT, M939 Cargo Truck, Henschel HWK-11, M37 Truck, M809 Cargo Truck, M41 Walker Bulldog LBT, M8/M20 Light Armored Car, M113 APC, M2/M3 Half-Track, M602 Truck, M54 Cargo Truck, M565 Cargo Truck, Centurion BMT, M35 Cargo Truck, M211 Cargo Truck, M715 Truck','Refurbishments/Resets, Upgrades/Modernization, Component or Sub-system  Redesign, Kitting, Packaging and Export, Systems Engineering expertise to integrate upgrades and modifications, V-200, V-504, V-378, Chaimite, M113A0, M113A1, M106, M125, M548, M577, M730, M741, M901, M981, M1059, M1064, M1068, Fitter’s, Mortar, Improved Suspension System, Improved Cooling System, External Fuel Tanks'),
'contact' => array('NAPCO International LLC','Contact Napco 1 952 931-2400'),
'past-projects' => array('NAPCO : Maintaining a Quality Management System in compliance with ISO 9001:2008','Napco: M41 DIESELIZATION PROGRAM, M113: RESET SUPPORT, LVTP-5/H-6 Dieselization Program'),
'services-legacy-licensee' => array('NAPCO: Legacy Platform specialist, Trusted OEM Licensee','Napco: Fleet Sustainment for
Cadillac Gage Legacy Vehicles, M113 Partner, VIC-2(V) Communication System, ')
);
?><!DOCTYPE HTML>
<html class="jsOff wf-inactive">
<head>
	<meta charset="utf-8">
	<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
	<script>document.getElementsByTagName('html')[0].className="";</script>
<script type="text/javascript" src="//use.typekit.net/dcl4rwm.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<script type="text/javascript" src="code/MyFontsWebfontsKit/MyFontsWebfontsKit.js"></script>
<!--[if lt IE 9]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script> <![endif]-->
	<link rel="stylesheet" href="code/napco.css" type="text/css" media="all">
	<title><?php echo $arr[$p][0];?></title>
	<meta name="description" content="<?php echo $arr[$p][1];?>">
</head>
<body id="<?php echo $p;?>">
<div id="wrapper">
<section id="logoMenuWrap">
<span id="subMenuBcgr"></span>
<div id="logoMenu" class="ctner">
<span class="logo"><a href="index.php">NAPCO International LLC</a></span>
<nav id="menu">
	<ul>
		<li id="mhome"><a href="index.php">home</a></li>
		<li id="mservices" class="hasSubMenu"><a href="services.php">services</a>
			<nav class="mainSubMenu"><div class="floatEnclosure"><ul class="float">
					<li id="sub1"><a href="services.php">overview</a></li>
					<li id="sub2"><a href="services-legacy-licensee.php">legacy platforms</a></li>
				</ul></div>
			</nav>
		</li>
		<li id="mabout"><a href="about.php">about</a></li>
		<li id="mpast"><a href="past-projects.php">past projects</a></li>
		<li id="mquote"><a href="contact.php">contact us</a></li>
	</ul>
</nav>
<div id="topSubMenu">
	<ul>
	<li class="fb"><a href="https://www.facebook.com/pages/NAPCO-International/1468022036765275">facebook</a></li>
	<li id="ph">+1  952 931-2400</li>
	<li id="fax">+1  952 931-2402</li>
	</ul>
</div>
</div>
</section>