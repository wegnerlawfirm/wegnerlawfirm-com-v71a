const ourPracticeEnclosure = () => {
    const strip = document.getElementById('our-practices-strip');
    const panels = strip.querySelectorAll('.practice-container')
    const practicesTitle = document.getElementById('title-our-practices')
    const practicesContent = document.getElementById('content-our-practices')
    const practicesLink = document.getElementById('content-link-our-practices')
    const practicesLinkText = document.getElementById('text-content-link-our-practices')
    let currentPractice = null

    const defaultText = {
        myTitle: practicesTitle.textContent,
        myContent: practicesContent.textContent,
        myLink: practicesLink.getAttribute('href'),
        myLinkText: practicesLinkText.textContent
    }

    const resetPanels = () => {
        panels.forEach(panel => {
            panel.setAttribute('data-state', 'closed')
            //@ts-ignore
            panel.querySelector('.practice-panel').style.maxHeight = '0'
        })
    }

    const resetDisplay = () => {
        practicesTitle.textContent = defaultText.myTitle;
        practicesContent.textContent = defaultText.myContent;
        practicesLink.setAttribute('href', defaultText.myLink);
        practicesLinkText.textContent = defaultText.myLinkText

    }

    const openPanel = (panel) => {
        const pnl = panel.querySelector('.practice-panel')
        const height = (pnl.scrollHeight + 35) + 'px';
        //@ts-ignore
        pnl.style.maxHeight = height
    }

    const setUpContent = (panel) => {
        const thisPractice = {
            myTitle: panel.getAttribute('data-practice'),
            myContent: panel.getAttribute('data-intro'),
            myLinkPath: panel.getAttribute('data-link'),
            myLinkText: 'Visit practice page to learn more'
        }

        practicesTitle.textContent=thisPractice.myTitle
        practicesContent.textContent = thisPractice.myContent
        practicesLink.setAttribute('href', thisPractice.myLinkPath)
        practicesLinkText.textContent =  thisPractice.myLinkText
    }

    panels.forEach(pnl => {
        const btn = pnl.querySelector('.practice-label')
        btn.addEventListener('click', () => {
            const openAfterRest = !(pnl.getAttribute('data-state') === 'opened')
            resetPanels()
            console.log(openAfterRest)
            if (openAfterRest) {
                const width = window.innerWidth
                pnl.setAttribute('data-state', 'opened')
                currentPractice = pnl
                if (width < 768) {
                    openPanel(pnl)
                } else {
                    setUpContent(pnl)
                }
            } else {
                resetDisplay()
                currentPractice = null
            }
        })
    })

    window.addEventListener('resize', () => {
        if (currentPractice !== null) {
            const width = window.innerWidth

            if (width < 768) {
                resetDisplay()
                openPanel(currentPractice)
            }else{
                resetPanels()
                setUpContent(currentPractice)
            }
        }
    })
}

ourPracticeEnclosure()