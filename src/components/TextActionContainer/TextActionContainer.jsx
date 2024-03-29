import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './text-action-container';
import { ThemeContext } from '../../utils/ThemeContext';

export default function TextActionContainer({
  title,
  forceWrapTitle = false,
  centerTitle = false,
  text,
  alignRight = false,
  headingLevel = 1,
  children,
  boldMainText = false,
  leftMobileText = false,
}) {
  const { theme } = useContext(ThemeContext);

  const textActionContainerClass = classNames('text-action-container', {
    'text-action-container--right': alignRight,
  });
  const titleClass = classNames(
    'text-action-container__title',
    `text-action-container__title--h${headingLevel}`,
    `text-action-container__title--${theme}`,
    {
      'text-action-container__title--right': alignRight,
      'text-action-container__title--wrap': forceWrapTitle,
      'text-action-container__title--center': centerTitle,
    }
  );
  const textClass = classNames('text-action-container__text', {
    'text-action-container__text--right': alignRight,
    'text-action-container__text--bold': boldMainText,
    'text-action-container__text--left': leftMobileText,
  });
  const actionClass = classNames(
    'text-action-container__action',
    `text-action-container__action--${theme}`
  );

  const HeadingTag = `h${headingLevel}`;
  return (
    <div className={textActionContainerClass}>
      <HeadingTag className={titleClass}>{title}</HeadingTag>
      <p className={textClass}>{text}</p>
      <div className={actionClass}>{children}</div>
    </div>
  );
}

TextActionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([ PropTypes.string, PropTypes.array ]).isRequired,
  alignRight: PropTypes.bool,
  leftMobileText: PropTypes.bool,
  boldMainText: PropTypes.bool,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  forceWrapTitle: PropTypes.bool,
  centerTitle: PropTypes.bool,
  children: PropTypes.node,
};
