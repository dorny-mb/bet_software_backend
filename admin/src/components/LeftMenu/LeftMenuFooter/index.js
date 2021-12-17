/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react'
import { PropTypes } from 'prop-types'

import Wrapper from './Wrapper'

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        Copyright &copy; 2021 &nbsp;
        <a key="website" href="https://betsotware.com" target="_blank" rel="noopener noreferrer">
          betsotware Core
        </a>
        &nbsp;
        <a
          href={`https://github.com/betsotware/core-backend/releases/tag/v${version}`}
          key="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          v{version}
        </a>
      </div>
    </Wrapper>
  )
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired
}

export default LeftMenuFooter
