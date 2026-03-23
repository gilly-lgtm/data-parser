import logging
from data_parser.config import Config
from data_parser.parser import Parser

def main():
    # Set up logging
    logging.basicConfig(level=logging.INFO)

    # Load configuration
    config = Config('config.yaml')
    logging.info('Loaded configuration')

    # Create parser
    parser = Parser(config)
    logging.info('Created parser')

    # Run parser
    parser.run()
    logging.info('Parsed data')

if __name__ == '__main__':
    main()