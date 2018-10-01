import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import s from './Order.scss'

const fetchFundAccountFormFields = (props) =>{
    let formFields = [];
    formFields.push({val:props.fundName, valClass:[], skipUndefined:true})
    formFields.push({label:'Account', labelClass:[s.labelField, s.accountInfo], val:props.orderRequest.fundAccount.account.name, valClass:[], skipUndefined:false})
    return formFields;
}

const setRowDivTagByGeneralEntity=(entity)=>{
    if(!entity.valClass && entity.skipUndefined){
        return(<div></div>)
    }
    return (
        <div className={cx(s.row)}>
            <div className={cx(entity.labelClass)}>{entity.label}</div>
            <div className={cx(entity.valClass)}>{entity.val}</div>
        </div>
    )
}

const Orders = (props) => {
    return(
        <div className={s.confirmOrderWrap}>
            {
                fetchFundAccountFormFields(props).map((item)=>{
                    return setRowDivTagByGeneralEntity(item)
                })
            }
        </div>
    )
}

Orders.propTypes = {
  orderRequest: PropTypes.instanceOf(Object),
  fundName: PropTypes.string,
}
export default Orders