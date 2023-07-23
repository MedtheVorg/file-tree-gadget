const files = [
  {
    name: 'Desktop',
    type: 'folder',
    content: [
      {
        name: 'Photos',
        type: 'folder',
        content: [
          { name: 'Hey_Programes.gif', type: 'image' },
          { name: 'Dog.png', type: 'image' },
        ],
      },
      {
        name: 'Music',
        type: 'folder',
        content: [
          { name: 'cave_in.mp3', type: 'audio' },
          { name: 'tell_the_end.wav', type: 'audio' },
        ],
      },
      {
        name: 'Video',
        type: 'folder',
        content: [
          { name: 'the_last_of_us.mp4', type: 'video' },
          { name: 'the_Presence.m4v', type: 'video' },
        ],
      },
      {
        name: 'Travel',
        type: 'folder',
        content: [
          { name: 'beach_photos.jpg', type: 'image' },
          { name: 'flight_tickets.pdf', type: 'file' },
        ],
      },
      {
        name: 'Projects',
        type: 'folder',
        content: [
          {
            name: 'Project A',
            type: 'folder',
            content: [
              { name: 'design_files', type: 'file' },
              { name: 'code_files', type: 'file' },
            ],
          },
          {
            name: 'Project B',
            type: 'folder',
            content: [
              { name: 'project_plan.docx', type: 'file' },
              { name: 'meeting_notes.txt', type: 'file' },
            ],
          },
        ],
      },
      {
        name: 'Personal',
        type: 'folder',
        content: [
          { name: 'diary.txt', type: 'file' },
          { name: 'family_photo.jpg', type: 'image' },
        ],
      },
      // Add more folders here...
    ],
  },
  {
    name: 'Applications',
    type: 'folder',
    content: [
      { name: 'hello-world.js', type: 'file' },
      { name: 'slack', type: 'file' },
      { name: 'calendar_events.txt', type: 'file' },
      { name: 'presentation.pptx', type: 'file' },
      { name: 'budget.xlsx', type: 'file' },
      { name: 'app_icon.png', type: 'image' },
      // 30 more files...
      { name: 'data_report.pdf', type: 'file' },
      { name: 'meeting_minutes.docx', type: 'file' },
      { name: 'video_presentation.mp4', type: 'video' },
      // Add more files here...
    ],
  },
  {
    name: 'Documents',
    type: 'folder',
    content: [
      { name: 'resume.pdf', type: 'file' },
      { name: 'cover_letter.docx', type: 'file' },
      { name: 'references.txt', type: 'file' },
      // Add more files here...
    ],
  },
  {
    name: 'Videos',
    type: 'folder',
    content: [
      {
        name: 'Tutorials',
        type: 'folder',
        content: [
          { name: 'javascript_basics.mp4', type: 'video' },
          { name: 'react_crash_course.mp4', type: 'video' },
          { name: 'html_intro.mp4', type: 'video' },
          { name: 'css_flexbox.mp4', type: 'video' },
        ],
      },
      { name: 'funny_cats.mp4', type: 'video' },
      { name: 'travel_vlog.mp4', type: 'video' },
      // Add more videos here...
    ],
  },
  // Add more top-level folders here...
];

export default files;
