import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CalculatorIcon } from './CalculatorIcon';
import { CalendarIcon } from './CalendarIcon';
import { CheckIcon } from './CheckIcon';
import { ChevronUpLargeIcon } from './ChevronUpLargeIcon';
import { CWarning1Icon } from './CWarning1Icon';
import { EllipseIcon } from './EllipseIcon';
import { EllipseIcon2 } from './EllipseIcon2';
import { ERemoveIcon } from './ERemoveIcon';
import { ERemoveIcon2 } from './ERemoveIcon2';
import { ERemoveIcon3 } from './ERemoveIcon3';
import { FrameIcon } from './FrameIcon';
import { FrameIcon2 } from './FrameIcon2';
import { FrameIcon3 } from './FrameIcon3';
import { HomeIcon } from './HomeIcon';
import { ImageIcon } from './ImageIcon';
import { ImageIcon2 } from './ImageIcon2';
import { Line5Icon } from './Line5Icon';
import { Line6Icon } from './Line6Icon';
import { Line7Icon } from './Line7Icon';
import { ProfileIcon } from './ProfileIcon';
import { ShoppingCartIcon } from './ShoppingCartIcon';
import { StarIcon } from './StarIcon';
import { SwitchIcon } from './SwitchIcon';
import { TagIcon } from './TagIcon';
import classes from './TattooPriceCalculatorEstimateC.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:944 */
export const TattooPriceCalculatorEstimateC: FC<Props> = memo(function TattooPriceCalculatorEstimateC(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.container}>
        <div className={classes.sizeSpecification}>Size Specification</div>
        <div className={classes.slider}>
          <div className={classes.frame}>
            <div className={classes.rectangle}></div>
          </div>
          <div className={classes.ellipse}>
            <EllipseIcon className={classes.icon} />
          </div>
        </div>
        <div className={classes.height50Cm}>Height: 50 cm</div>
        <div className={classes.slider2}>
          <div className={classes.frame2}>
            <div className={classes.rectangle2}></div>
          </div>
          <div className={classes.ellipse2}>
            <EllipseIcon2 className={classes.icon2} />
          </div>
        </div>
        <div className={classes.width50Cm}>Width: 50 cm</div>
      </div>
      <div className={classes.container2}>
        <div className={classes.container3}>
          <div className={classes.image}>
            <ImageIcon className={classes.icon3} />
          </div>
          <div className={classes.image2}>
            <ImageIcon2 className={classes.icon4} />
          </div>
        </div>
        <div className={classes.container4}>
          <div className={classes.avatar}>
            <div className={classes.rectangle3}></div>
          </div>
          <div className={classes.profile}>
            <ProfileIcon className={classes.icon5} />
          </div>
          <div className={classes.tattooPriceCalculator}>Tattoo Price Calculator</div>
        </div>
      </div>
      <div className={classes.container5}>
        <div className={classes.applyDiscounts}>Apply Discounts</div>
        <div className={classes.textbox}>
          <div className={classes.enterDiscountCode}>Enter discount code</div>
          <div className={classes.tag}>
            <TagIcon className={classes.icon6} />
          </div>
        </div>
        <button className={classes.button}>
          <div className={classes.applyDiscount}>Apply Discount</div>
          <div className={classes.check}>
            <CheckIcon className={classes.icon7} />
          </div>
        </button>
      </div>
      <div className={classes.container6}>
        <div className={classes.estimateSummary}>Estimate Summary</div>
        <div className={classes.switch}>
          <SwitchIcon className={classes.icon8} />
        </div>
        <div className={classes.subtotal200}>Subtotal: $200</div>
        <div className={classes.discount20}>Discount: $20</div>
        <div className={classes.total180}>Total: $180</div>
        <div className={classes.breakdown}>Breakdown</div>
        <div className={classes.totalHours5}>Total Hours: 5</div>
        <div className={classes.ratePerHour100}>Rate per Hour: $100</div>
      </div>
      <div className={classes.container7}>
        <div className={classes.styleSelection}>Style Selection</div>
        <button className={classes.dropdownButton3}>
          <div className={classes.rectangle4}></div>
          <div className={classes.chevronUpLarge}>
            <ChevronUpLargeIcon className={classes.icon9} />
          </div>
        </button>
        <div className={classes.container77}>
          <div className={classes.checkbox1}>
            <div className={classes.frame3}>
              <div className={classes.rectangle5}></div>
              <div className={classes.item1}>Item 01</div>
              <div className={classes.frame4}>
                <FrameIcon className={classes.icon10} />
              </div>
            </div>
          </div>
          <div className={classes.line5}>
            <Line5Icon className={classes.icon11} />
          </div>
          <div className={classes.checkbox2}>
            <div className={classes.frame5}>
              <div className={classes.rectangle6}></div>
              <div className={classes.item2}>Item 02</div>
              <div className={classes.frame6}>
                <FrameIcon2 className={classes.icon12} />
              </div>
            </div>
          </div>
          <div className={classes.line6}>
            <Line6Icon className={classes.icon13} />
          </div>
          <div className={classes.checkbox3}>
            <div className={classes.frame7}>
              <div className={classes.rectangle7}></div>
              <div className={classes.item3}>Item 03</div>
              <div className={classes.frame8}>
                <FrameIcon3 className={classes.icon14} />
              </div>
            </div>
          </div>
          <div className={classes.line7}>
            <Line7Icon className={classes.icon15} />
          </div>
          <div className={classes.checkbox4}>
            <div className={classes.frame9}>
              <div className={classes.rectangle8}></div>
              <div className={classes.item4}>Item 04</div>
            </div>
          </div>
        </div>
        <div className={classes.tag1}>
          <div className={classes.frame10}>
            <div className={classes.item12}>Item 01</div>
            <div className={classes.eRemove}>
              <ERemoveIcon className={classes.icon16} />
            </div>
          </div>
          <div className={classes.frame11}>
            <div className={classes.item22}>Item 02</div>
            <div className={classes.eRemove2}>
              <ERemoveIcon2 className={classes.icon17} />
            </div>
          </div>
          <div className={classes.frame12}>
            <div className={classes.item32}>Item 03</div>
            <div className={classes.eRemove3}>
              <ERemoveIcon3 className={classes.icon18} />
            </div>
          </div>
        </div>
        <div className={classes.container8}>
          <div className={classes.detailsLevel}>Details Level</div>
          <div className={classes.headerMenu}>
            <div className={classes.frame13}>
              <div className={classes.low}>Low</div>
            </div>
            <div className={classes.frame14}>
              <div className={classes.medium}>Medium</div>
            </div>
            <div className={classes.frame15}>
              <div className={classes.high}>High</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.container9}>
        <div className={classes.tabBarMenu}>
          <div className={classes.frame16}>
            <div className={classes.home}>
              <HomeIcon className={classes.icon19} />
            </div>
            <div className={classes.home2}>Home</div>
          </div>
          <div className={classes.frame17}>
            <div className={classes.shoppingCart}>
              <ShoppingCartIcon className={classes.icon20} />
            </div>
            <div className={classes.cart}>Cart</div>
          </div>
          <div className={classes.frame18}>
            <div className={classes.calendar}>
              <CalendarIcon className={classes.icon21} />
            </div>
            <div className={classes.booking}>Booking</div>
          </div>
          <div className={classes.frame19}>
            <div className={classes.star}>
              <StarIcon className={classes.icon22} />
            </div>
            <div className={classes.rewards}>Rewards</div>
          </div>
          <div className={classes.frame20}>
            <div className={classes.calculator}>
              <CalculatorIcon className={classes.icon23} />
            </div>
            <div className={classes.priceCalc}>Price Calc</div>
          </div>
        </div>
      </div>
      <div className={classes.container83}>
        <div className={classes.finalPricingIsProvidedAfterCon}>
          Final pricing is provided after consulting with me for accuracy.
        </div>
        <div className={classes.cWarning1}>
          <CWarning1Icon className={classes.icon24} />
        </div>
      </div>
    </div>
  );
});
