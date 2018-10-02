import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import s from './Order.scss'

const fetchFundAccountFormFields = (props) =>{
    console.log('fetchFundAccountFormFields ~~~~~~~~ ', props.orderRequest);
    let formFields = [];
    formFields.push({label:'Account', labelClass:[s.labelField, s.accountInfo], val:props.orderRequest.fundAccount.account.name, valClass:[], skipUndefined:false})
    formFields.push({label:'Market Value', labelClass:[s.labelField], val:props.orderRequest.fundAccount.balance.balanceAmt, valClass:[], skipUndefined:false})
    formFields.push({label:'Total Share', labelClass:[s.labelField], val:props.orderRequest.fundAccount.balance.shares, valClass:[], skipUndefined:false})
    formFields.push({label:'Est. Market Value', labelClass:[s.labelField], val:props.orderRequest.fundAccount.balance.balanceAmt, valClass:[], skipUndefined:false})
    formFields.push({label:'Est. Share', labelClass:[s.labelField], val:props.orderRequest.fundAccount.estimatedShare, valClass:[], skipUndefined:true})
    formFields.push({label:'Fund % Owned', labelClass:[s.labelField], val:props.orderRequest.fundAccount.fundPercentOwned, valClass:[], skipUndefined:true})
    formFields.push({label:'Est. Total Market Value', labelClass:[s.labelField], val:props.orderRequest.fundAccount.estimatedTotalMarketValue, valClass:[], skipUndefined:true})
    formFields.push({label:'Est. Total Share', labelClass:[s.labelField], val:props.orderRequest.fundAccount.estimatedTotalShare, valClass:[], skipUndefined:true})
    return formFields;
}

const setRowDivTagByGeneralEntity=(entity, index)=>{
    if(!entity.val && entity.skipUndefined){
        return(<div></div>)
    }
    return (
        <div className={cx(s.row)} key={index}>
            <div className={cx(entity.labelClass)}>{entity.label}</div>
            <div className={cx(entity.valClass)}>{entity.val}</div>
        </div>
    )
}

const Orders = (props) => {
    return(
        <div className={s.confirmOrderWrap}>
            <div className={cx(s.row)}>
                {setRowDivTagByGeneralEntity({val:props.fundName, valClass:[], skipUndefined:true}, 0)}
            </div>
            <div className={cx(s.row)}>
                {
                    fetchFundAccountFormFields(props).map((item, index)=>{
                        return setRowDivTagByGeneralEntity(item, index)
                    })
                }
            </div>
        </div>
    )
}

Orders.propTypes = {
  orderRequest: PropTypes.instanceOf(Object),
  fundName: PropTypes.string,
}
export default Orders