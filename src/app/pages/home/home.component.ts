import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  eduQualifications = [
    {
      year: '2019 - 2021',
      title: 'M.Tech in Computer Science and Engineering',
      institute:
        'International Institute of Information Techonology (IIIT), Bangalore',
      score: 'CGPA 3.44/4',
    },
    {
      year: '2019',
      title: 'GATE Computer Science ',
      institute: 'All India Rank - 618',
      score: 'Score 722/1000',
    },
    {
      year: '2014 - 2018',
      title: 'B.Tech in Computer Science and Engineering',
      institute: 'Walchand College of Engineering, Sangli',
      score: 'CPI 8.7/10',
    },
    {
      year: '2014',
      title: 'IIT-JEE (Advance) ',
      institute: 'All India Rank - 16,518',
      score: '',
    },
    {
      year: '2012 - 2014',
      title: 'Higher Secondary School Certficate (HSC)',
      institute: 'Chh. Shahu Vidyalaya Junior College, Kolhapur',
      score: 'Percentage - 85.02%',
    },
    {
      year: '2000 - 2012',
      title: 'Secondary School Certficate (SSC)',
      institute: `St. Xavier's High School, Kolhapur`,
      score: 'Percentage - 87.82%',
    },
  ];
}
