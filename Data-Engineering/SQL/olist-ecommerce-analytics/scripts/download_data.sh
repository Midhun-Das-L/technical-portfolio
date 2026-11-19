#!/usr/bin/env bash
# Downloads the Olist Brazilian E-commerce dataset (CC BY-NC-SA 4.0) from Kaggle.
# Needs a Kaggle API token: https://www.kaggle.com/docs/api  (~/.kaggle/kaggle.json)
# Alternative: download the zip manually from
#   https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce
# and unzip all CSVs into data/raw/.
set -euo pipefail
cd "$(dirname "$0")/.."
pip install -q kaggle
kaggle datasets download -d olistbr/brazilian-ecommerce -p data/raw --unzip
ls -lh data/raw
