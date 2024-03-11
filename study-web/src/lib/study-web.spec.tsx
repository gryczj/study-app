import { render } from '@testing-library/react';

import StudyWeb from './study-web';

describe('StudyWeb', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StudyWeb />);
    expect(baseElement).toBeTruthy();
  });
});
