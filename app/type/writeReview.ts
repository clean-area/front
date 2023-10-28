export type Review6 =
  | 'recommended'
  | 'suggestion'
  | 'regret'
  | 'reapply'
  | 'expectation'
  | 'difficulty';

export type ReviewMeonji = {
  ph: string;
  src_gray: string;
  src_color: string;
  alt: Review6;
};
