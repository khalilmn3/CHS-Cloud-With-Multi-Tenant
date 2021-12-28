<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" href="favicon.ico" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Stimulsoft Reports.JS - PHP Demo</title>

	<!-- Report Viewer Office2013 style -->
	<link href="{{asset('css/stimulsoft.viewer.office2013.whiteblue.css')}}" rel="stylesheet">

	<!-- Stimusloft Reports.JS -->
	<script src="{{asset('scripts/stimulsoft.reports.js')}}" type="text/javascript"></script>
	<script src="{{asset('scripts/stimulsoft.viewer.js')}}" type="text/javascript"></script>
</head>
<body>
	<div>
		<a href="index.php?id=SimpleList">Simple List</a><br>
		<a href="index.php?id=HighlightCondition">Highlight Condition</a><br>
		<a href="index.php?id=Images">Images</a><br>
		<a href="index.php?id=MasterDetail">Master-Detail</a><br>
		<a href="index.php?id=MultiColumnList">Multi-Column List</a><br>
		<a href="index.php?id=SimpleGroup">Simple-Group</a><br>
    {{$data}}
    <?php
        // Get report id from URL parameters
        $report_id = $data;
    ?>

		<script type="text/javascript">
            // Create a new report instance and load report from server

			var report = new Stimulsoft.Report.StiReport();
            report.loadFile('../storage/reports/ReservationList.mrt');

            report.regData("Demo", "Demo", $report_id);
			// View report in Viewer
			var options = new Stimulsoft.Viewer.StiViewerOptions();
			var viewer = new Stimulsoft.Viewer.StiViewer(options);
			viewer.report = report;
		</script>
	</div>
</body>
</html>
