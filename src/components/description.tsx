import * as React from 'react';
import MathJax from 'react-mathjax3'

//i'm generating these strings from http://atomurl.net/math/
const covariance = '$Cov[X,  BTC]=\\sum_{i=1}^{30}\\frac{{(X_i - \\overline{X})} {(BTC_i - \\overline{BTC})}}{30}$';
const correlation = '$ρ_{X, BTC}=\\frac{Cov[X, BTC]}{{\\sigma_X}⋅{\\sigma_{BTC}}}$';
const mean = `$\\overline{X}=E[X]=\\frac{100}{30}⋅\\sum_{i=1}^{30}\\frac{{X_{i+1}-{X_i}}}{X_i}$`;
const variance = `$Var[X] = E[X^{2}] - E[X]^{2}$`
const volatility = `$σ_{X} = SD[X] = \\sqrt{Var[X]}$`
const varianceproof = `$Cov[X, X] = E[(X_{i}-E[X])(X_{i}-E[X])] = E[(X_{i}-E[X])^{2}] = Var[X]$`
const varianceproof2 = `$ρ_{X, X}=\\frac{Cov[X, X]}{σ_{X} ⋅ σ_{X}} = \\frac{Var[X]}{Var[X]} = 1$`

const Description = () => {
    return (
    <div id='description-container'>
        <div className='desc-mean'>
            <h2>What is the Expected Return?</h2>
            <p>This represents the expected amount of gain or loss each day. It is the weighted average of recent returns. Also called the mean, it is calculated by summing the realized daily returns and dividing by the number of periods. The returns are the percentage increases in the value of the asset per dollar initially invested. I am multiplying by 100 to get a number that looks like 2.00 rather than 0.02. Then diving by 30 because I am calculating the mean over 30 days. Note that I'm using 31 days of data because the formula uses i+1.</p><br/>
            <MathJax.Context
        input='tex'
        script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
        options={ {
            messageStyle: 'none',
            extensions: ['tex2jax.js'],
            jax: ['input/TeX', 'output/HTML-CSS'],
            tex2jax: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']],
                processEscapes: true,
            },
            TeX: {
                extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
            }
        } }
    >
        <MathJax.Html html={ mean } />
    </MathJax.Context>
        </div>

        <div className='desc-var'>
            <h2>What is Variance?</h2>
            <p>Variance is the expected squared deviation from the mean. It is a  measure of the dispersion of returns. The method I've used to calculate the variance of an asset is the mean of the square minus the square of the mean. Variance cannot be negative.</p><br/>
            <div>
            <MathJax.Context
            input='tex'
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
                messageStyle: 'none',
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                },
                TeX: {
                    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
                }
            } }
            >
            <MathJax.Html html={ variance } />
            </MathJax.Context>
            </div>                 
            
            <br/><p>Although not usually used directly to make observations about an asset, it is used within the calculations of volatility, covariance and correlation. Variance is added for completeness and to witness that the variance and covariance of BTC are equal to eachother. Therefore the correlation will also be 1.</p><br/>
            <div>
            <MathJax.Context
            input='tex'
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
                messageStyle: 'none',
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                },
                TeX: {
                    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
                }
            } }
        >
            <MathJax.Html html={ varianceproof } />
        </MathJax.Context>
            </div><br/>

            <div>
            <MathJax.Context
            input='tex'
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
                messageStyle: 'none',
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                },
                TeX: {
                    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
                }
            } }
            >
            <MathJax.Html html={ varianceproof2 } />
            </MathJax.Context>
            </div>   
        </div>

        <div className='desc-vol'>
            <h2>What is Volatility?</h2>
            <p>Volatility, or standard deviation in non-finance terms, is a measure of the dispersion of returns for an asset. Usually, the higher the volatility, the riskier the asset. It is popular in market incidators such as bollinger bands. It is calculated simply via the square root of the variance. Volatility cannot be negative.</p><br/>
            <div>
            <MathJax.Context
            input='tex'
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
                messageStyle: 'none',
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                },
                TeX: {
                    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
                }
            } }
        >
            <MathJax.Html html={ volatility } />
        </MathJax.Context>
            </div>            
        </div>

        <div className='desc-cov'>
            <h2>What is Covariance?</h2>
            <p>Covariance measures the extent or magnitude to which two variables fluctuate or move together. It is not normalized so it could be hard to use the variable as it is.</p>
            <br/>
            <div>
            <MathJax.Context
            input='tex'
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
                messageStyle: 'none',
                extensions: ['tex2jax.js'],
                jax: ['input/TeX', 'output/HTML-CSS'],
                tex2jax: {
                    inlineMath: [['$', '$'], ['\\(', '\\)']],
                    displayMath: [['$$', '$$'], ['\\[', '\\]']],
                    processEscapes: true,
                },
                TeX: {
                    extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
                }
            } }
        >
            <MathJax.Html html={ covariance } />
        </MathJax.Context>
            </div><br/>
            <ul>
                <li>If the covariance is positive, then the two variables tend to move together. In other
                words, if one variable increases (or decreases), so does the other variable.</li>
                <li>If the covariance is negative, then the two variables tend to move in opposite directions. In other words, if one variable increases, the other variable decreases.</li>
                <li>If the covariance is 0, then there is no linear relationship between the two variables.</li>
            </ul>            
        </div>
        
        <div className='desc-cor'>
            <h2>What is Correlation?</h2>
            <p>Correlation, specifically the correlation coeffecient here,
            is a unitless measure of the strength and direction of the linear relationship between two
            variables. It is more useful than covariance because it is dimensionless and normalized between -1 and 1. It is obtained by dividing the covariance of two variables by the product of their
            standard deviations:</p><br/>
            <MathJax.Context
            input='tex'
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={ {
            messageStyle: 'none',
            extensions: ['tex2jax.js'],
            jax: ['input/TeX', 'output/HTML-CSS'],
            tex2jax: {
                inlineMath: [['$', '$'], ['\\(', '\\)']],
                displayMath: [['$$', '$$'], ['\\[', '\\]']],
                processEscapes: true,
            },
            TeX: {
                extensions: ['AMSmath.js', 'AMSsymbols.js', 'noErrors.js', 'noUndefined.js']
            }
            } }
            >
            <MathJax.Html html={ correlation } />
            </MathJax.Context><br/>
            <ul>
                <li>A correlation of 1 indicates perfect positive correlation between two variables. The
                closer the correlation is to 1, the more the variables tend to move together in the
                same direction</li>
                <li>A correlation -1 of indicates perfect negative correlation between two variables. The
                closer the correlation is to -1, the more the variables tend to move in opposite
                directions.</li>
                <li>A correlation of 0 indicates no linear relationship between two variables. Movement
                of one variable provides no prediction regarding the movement of the other variable.</li>
            </ul>
        </div>
    </div>
    )
}

export default Description;