export default {
  actionIcon: 'StarIcon',
  highlightColor: 'warning',
  data: [
    {index: 0, label: 'Home',           url: '/',      labelIcon: 'MonitorIcon',     highlightAction: false},
    {index: 1, label: 'Reservation',    url: '/reservation/reservation-list', labelIcon: 'CalendarIcon', highlightAction: true},
    {index: 2, label: 'Availability',   url: '/reservation/availability', labelIcon: 'FileIcon', highlightAction: false},
    {index: 3, label: 'Room Availability', url: '/reservation/room-availiability', labelIcon: 'FileIcon', highlightAction: false},
    {index: 4, label: 'Guest Group',    url: '/reservation/guest-group', labelIcon: 'FileIcon', highlightAction: false},
    {index: 5, label: 'Guest In House', url: '/guestinhouse', labelIcon: 'HomeIcon', highlightAction: true},
    {index: 6, label: 'Master Folio',   url: '/master-folio', labelIcon: 'FileTextIcon', highlightAction: false},
    {index: 7, label: 'Desk Folio',     url: '/desk-folio', labelIcon: 'FileIcon', highlightAction: false},
    {index: 8, label: 'Folio History',  url: '/folio-history', labelIcon: 'ClockIcon', highlightAction: false},
    {index: 9, label: 'House Keeping',  url: '/housekeeping', labelIcon: 'DropletIcon', highlightAction: false},
    {index: 10, label: 'Report',        url: '/back-office/report', labelIcon: 'FileTextIcon', highlightAction: true}
  ]
}
