import React from 'react'
// import {useSelector} from 'react-redux'
import { Column, Grid, Row } from 'carbon-components-react'
import PolicyTableItem from './PolicyTableItem'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'
import { messages } from '../nls/nlsUtility'

const PolicyTable = ({ policies, intl }) => {
  const renderEmptyPolicyTable = () => {
    return (
      <div data-testid={'emptyPolicyTable'}>
        {intl.formatMessage(messages.noPolicies)}
      </div>
    )
  }

  const renderItem = (item, index) => {
    return (
      <Row key={item.id} data-testid={'policyItem'} className={'policy-row'}>
        <Column className={'policy-cell'}>
          <PolicyTableItem
            id={item.id}
            title={item.title}
            summary={item.summary}
            dateIntroduced={item.date_introduced}
            rowNumber={index}
          />
        </Column>
      </Row>
    )
  }

  if (!policies || !policies.length) {
    return renderEmptyPolicyTable()
  }
  return (
    <div data-testid={'policyTable'}>
      <Grid className={'policy-table'}>
        <Row className={'policy-title-row'}>
          <Column>{`POLICIES: (${policies.length})`}</Column>
        </Row>
        {policies.map(renderItem)}
      </Grid>
    </div>
  )
}

PolicyTable.propTypes = {
  policies: PropTypes.array.isRequired,
  intl: PropTypes.any.isRequired,
}

export default injectIntl(PolicyTable)
