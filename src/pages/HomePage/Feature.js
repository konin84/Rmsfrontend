import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../../images/feature_1.png'
import featureimage1 from '../../images/feature_2.png'
import featureimage2 from '../../images/feature_3.png'

export default function Feature() {
  return (

    <div id='features'>

      <div className='a-container'>
          
          <FeatureBox image={featureimage} 
          title='We are the best in the world' />
          <FeatureBox image={featureimage1} 
          title='We are the best in the world' />
          <FeatureBox image={featureimage2} 
          title='We are the best in the world' />
      </div>

    </div>
  )
}
