 const basePrice = 1925.00;

    function changeValue(id, delta) {
        let countElem = document.getElementById(id);
        let count = parseInt(countElem.textContent);
        count = Math.max(1, count + delta);
        countElem.textContent = count;
        updatePrice();
    }

    function updatePrice() {
        let userCount = parseInt(document.getElementById('userCount').textContent);
        let yearCount = parseInt(document.getElementById('yearCount').textContent);
        let totalPrice = basePrice * userCount * yearCount;
        document.getElementById('priceAmount').textContent = totalPrice.toFixed(2);
    }




     const products = {
        home: {
            dropdown: [
                { name: 'eScan Total Security Suite with Cloud Security', features: ['Comprehensive Protection against Network-based Attacks', 'Low Memory Intensive Process for PC', 'Block Notifications & Alerts while Playing Favorite Games', 'Round-the-Clock Expert Support'] },
                { name: 'eScan Internet Security Suite', features: ['Advanced Web Protection', 'Parental Control Features', 'Safe Browsing with URL Filter', 'Cloud Backup & Restore'] },
                { name: 'eScan Anti-Virus Toolkit', features: ['Portable Virus Scanner', 'No Installation Required', 'Free Malware Removal Toolkit', 'Compatible with Multiple Platforms'] }
            ]
        },
        smb: {
            dropdown: [
                { name: 'eScan SMB Security Suite', features: ['Advanced Network Protection', 'Endpoint Security', 'Centralized Dashboard', 'Multi-device Support'] },
                { name: 'eScan Internet Security for SMB', features: ['Web Filtering', 'Spam Protection', 'Data Backup', 'Vulnerability Scanner'] }
            ]
        },
        enterprise: {
            dropdown: [
                { name: 'eScan Enterprise Security', features: ['Advanced Threat Protection', 'Active Directory Integration', 'Patch Management', 'Device Control'] },
                { name: 'eScan Corporate Edition', features: ['Centralized Management Console', 'Bandwidth Control', 'Content Filtering', 'Automated Updates'] }
            ]
        }
    };

    const buttonGroup = document.getElementById('buttonGroup');
    const productDropdown = document.getElementById('productDropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const featureList = document.getElementById('featureList');

    function updateDropdown(productKey) {
        const productData = products[productKey];
        dropdownMenu.innerHTML = '';

        productData.dropdown.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `<a class="dropdown-item" href="#" data-index="${index}">${item.name}</a>`;
            dropdownMenu.appendChild(li);
        });

        // Update dropdown button label & features to first item
        productDropdown.innerText = productData.dropdown[0].name;
        updateFeatures(productData.dropdown[0].features);
    }

    function updateFeatures(features) {
        featureList.innerHTML = '';
        features.forEach(f => {
            featureList.innerHTML += `
                <li class="d-flex align-items-end justify-self-center mb-2 w-auto">
                    <i class="bi bi-check-lg text-success me-2 flex-shrink-0"></i>
                    <span class="text-break">${f}</span>
                </li>`;
        });
    }

    // Handle main buttons toggle
    buttonGroup.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            buttonGroup.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = '#bfbfbf';
                btn.style.border = '2px solid #999';
            });

            e.target.classList.add('active');
            e.target.style.background = '#d5e07d';
            e.target.style.border = '2px solid #b3cc00';

            const productKey = e.target.getAttribute('data-product');
            updateDropdown(productKey);
        }
    });

    // Handle dropdown item click
    dropdownMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const index = e.target.getAttribute('data-index');
            const activeProduct = buttonGroup.querySelector('button.active').getAttribute('data-product');
            const productData = products[activeProduct].dropdown[index];

            productDropdown.innerText = productData.name;
            updateFeatures(productData.features);
        }
    });

    // Initialize
    updateDropdown('home');

