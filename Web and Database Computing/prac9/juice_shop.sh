export NODE_ENV=unsafe
export JUICE_DIR=/tmp/juice-shop

if [ ! -e $JUICE_DIR ]; then
    if [ ! -e ~/juice-shop.tar.gz ]; then
        curl -Lo ~/juice-shop.tar.gz https://github.com/bkimminich/juice-shop/releases/download/v12.7.2/juice-shop-12.7.2_node12_linux_x64.tgz
    fi
    echo -e "\nLoading ...\n"
    tar -xzf ~/juice-shop.tar.gz -C /tmp
    mv /tmp/juice-shop_12.7.2 $JUICE_DIR
    echo -e "\nReady to sell some Juice!\n\n\n\n\n\n"
fi

cd $JUICE_DIR
npm start